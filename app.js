(()=>{
'use strict';
const $=id=>document.getElementById(id);
const tabs=['Buildings','Items','Technology','Colonists','Station','Environment','Guidebook','Features','Controls'];
const icons=['▣','◇','⚙','♟','▦','△','▤','☷','⌨'];
const all=CATALOG.map(e=>({...e,kind:e.kind==='building'?'Buildings':'Items',category:e.kind==='building'?(e.meta?.build_tab||'Uncategorized'):(e.meta?.type||'Other').split(',')[0].trim()}));
const byId=new Map(all.map(e=>[e.id,e]));
const techByName=new Map(TECHNOLOGIES.map(t=>[t.name,t]));
const colonistById=new Map(COLONIST_TOPICS.map(t=>[t.id,t]));
const stationById=new Map(STATION_TOPICS.map(t=>[t.id,t]));
const environmentById=new Map(ENVIRONMENT_TOPICS.map(t=>[t.id,t]));
const featureById=new Map(FEATURES.map(t=>[t.id,t]));
const guideById=new Map(GUIDES.map(t=>[t.id,t]));
const techGroups=['Start','Food','Liquids','Gas','Industry','Power','Base','Lifestyle','Medical'];
const normalize=s=>String(s||'').replace(/\s+/g,' ').trim().toLowerCase();
const byName=new Map(all.map(e=>[normalize(e.title),e]));
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Link tokens are captured *after* the surrounding article has been escaped.
// Decode them only for internal lookups; labels and data-* attributes are already HTML-safe.
const decodeEscapedLinkToken=s=>String(s).replace(/&(amp|lt|gt|quot|#39);/g,(_,entity)=>({amp:'&',lt:'<',gt:'>',quot:'"','#39':"'"}[entity]));
const img=e=>e.image.replace(/^\//,'');
let state={view:'home',tab:'Buildings',category:'All',id:null};
let visits=[{...state}],position=0;
let suggestions=[],selectedSuggestion=0;
function goto(s,remember=true){state={...s};if(remember){visits=visits.slice(0,position+1);visits.push({...state});position=visits.length-1;}clearSearch();render();}
function categoryView(tab,cat='All'){goto({view:'category',tab,category:cat,id:null});}
function detail(e){goto({view:'detail',tab:e.kind,category:e.category,id:e.id});}
function techDetail(name){const t=techByName.get(name);if(t)goto({view:'tech',tab:'Technology',category:t.group,id:t.name});}
function colonistDetail(id){const t=colonistById.get(id);if(t)goto({view:'colonist',tab:'Colonists',category:'All',id});}
function stationDetail(id){const t=stationById.get(id);if(t)goto({view:'station',tab:'Station',category:'All',id});}
function environmentDetail(id){const t=environmentById.get(id);if(t)goto({view:'environment',tab:'Environment',category:'All',id});}
function featureDetail(id){const t=featureById.get(id);if(t)goto({view:'feature',tab:'Features',category:'All',id});}
function guideDetail(id){const t=guideById.get(id);if(t)goto({view:'guide',tab:'Guidebook',category:'All',id});}
function clearSearch(){suggestions=[];selectedSuggestion=0;$('search').value='';$('search-suggest').hidden=true;$('search-suggest').innerHTML='';}
function searchMatches(q){const term=normalize(q);if(!term)return [];return all.filter(e=>normalize(e.title).includes(term)).sort((a,b)=>{const aStart=normalize(a.title).startsWith(term)?0:1,bStart=normalize(b.title).startsWith(term)?0:1;return aStart-bStart||a.title.localeCompare(b.title);}).slice(0,8);}
function showSuggestions(){const box=$('search-suggest');suggestions=searchMatches($('search').value);selectedSuggestion=0;box.innerHTML=suggestions.map((e,i)=>`<button type="button" role="option" aria-selected="${i===0}" data-search-id="${escape(e.id)}"><span>${escape(e.title)}</span><small>${escape(e.kind)}</small></button>`).join('');box.hidden=!suggestions.length;}
function selectSuggestion(index){const e=suggestions[index];if(e)detail(e);else clearSearch();}
function linkText(str){let s=escape(str);s=s.replace(/\{\{1\|([^|}]+)(?:\|([^}]+))?\}\}/g,(_,a,b)=>'<a class="wiki-link" data-link="'+a+'">'+(b||a)+'</a>');s=s.replace(/\[\[([^|\]#]+)(?:#[^|\]]*)?(?:\|([^\]]+))?\]\]/g,(_,a,b)=>'<a class="wiki-link" data-link="'+a+'">'+(b||a)+'</a>');s=s.replace(/'''([^']+?)'''/g,'<strong>$1</strong>').replace(/''([^']+?)''/g,'<em>$1</em>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');s=s.replace(/&lt;br\s*\/?&gt;/gi,'<br>');return s;}
function toHtml(raw){const lines=String(raw||'').split('\n');let out='',list=false;
 const close=()=>{if(list){out+='</ul>';list=false;}};
 for(let i=0;i<lines.length;i++){let s=lines[i].trim();if(!s)continue;
 if(s.startsWith('[[Category:')||s==='__NOTOC__'||s.startsWith('<div')||s.startsWith('</div'))continue;
 if(s.startsWith('{|')){close();const rows=[];let cells=[],header=false;for(i++;i<lines.length;i++){let r=lines[i].trim();if(r.startsWith('|}')){if(cells.length)rows.push({cells,header});break;}if(r.startsWith('|-')){if(cells.length){rows.push({cells,header});cells=[];header=false;}continue;}if(r.startsWith('!')){header=true;cells=r.slice(1).split(/!!/).map(x=>x.trim());continue;}if(r.startsWith('|')){const parts=r.slice(1).split(/\|\|/).map(x=>x.trim());cells.push(...parts);} }out+='<div class="table-wrap"><table>'+rows.map(row=>'<tr>'+row.cells.map(c=>row.header?'<th>'+linkText(c)+'</th>':'<td>'+linkText(c)+'</td>').join('')+'</tr>').join('')+'</table></div>';continue;}
 if(s.startsWith('*')){if(!list){out+='<ul>';list=true;}out+='<li>'+linkText(s.replace(/^\*+\s*/,''))+'</li>';continue;}close();if(/^==+/.test(s)){out+='<h3>'+linkText(s.replace(/^=+|=+$/g,'').trim())+'</h3>';continue;}if(/^\{\{/.test(s)&&!s.startsWith('{{1|')){out+='<p class="template-note">'+escape(s)+'</p>';continue;}out+='<p>'+linkText(s)+'</p>';
 }close();return out;}
function renderTabs(){$('tabs').innerHTML=tabs.map((t,i)=>`<button data-tab="${t}" class="${state.tab===t&&state.view!=='home'?'active':''}"><b>${icons[i]}</b><span>${t}</span></button>`).join('');}
function renderCrumb(){const p=[{label:'Home',action:'home'}];if(state.view!=='home'){p.push({label:state.tab,action:'tab'});if(state.category!=='All'&&['category','detail'].includes(state.view))p.push({label:state.category,action:'cat'});if(state.view==='detail')p.push({label:byId.get(state.id)?.title||'',action:'none'});if(state.view==='tech')p.push({label:state.id||'',action:'none'});if(state.view==='colonist')p.push({label:colonistById.get(state.id)?.title||'',action:'none'});if(state.view==='station')p.push({label:stationById.get(state.id)?.title||'',action:'none'});if(state.view==='environment')p.push({label:environmentById.get(state.id)?.title||'',action:'none'});if(state.view==='feature')p.push({label:featureById.get(state.id)?.title||'',action:'none'});if(state.view==='guide')p.push({label:guideById.get(state.id)?.title||'',action:'none'});} $('crumb').innerHTML=p.map((x,i)=>`<button data-crumb="${x.action}" ${x.action==='none'?'disabled':''}>${escape(x.label)}</button>${i<p.length-1?'<span>›</span>':''}`).join('');$('back').disabled=position===0;$('forward').disabled=position===visits.length-1;}
function renderCategory(){const cat=$('categories');const m=$('middle');const detailed=state.view==='detail';if(['Features','Guidebook'].includes(state.tab)&&state.view!=='home'){
 const isGuide=state.tab==='Guidebook',groups=isGuide?GUIDE_GROUPS:FEATURE_GROUPS,entries=isGuide?GUIDES:FEATURES;
 cat.className='panel station-sidebar content-sidebar';
 cat.innerHTML='<button class="col-home '+(state.view==='category'?'active':'')+'" data-tab="'+state.tab+'">▣ &nbsp;'+state.tab+' Overview</button>'
 +groups.map(group=>'<div class="col-group">'+escape(group.title)+'</div>'+entries.filter(t=>t.group===group.id)
  .map(t=>'<button class="col-nav '+(state.id===t.id?'active':'')+'" data-'+(isGuide?'guide':'feature')+'="'+escape(t.id)+'"><span class="content-nav-id">'+escape(t.id)+'</span>'+escape(t.title)+'</button>').join('')).join('');
 m.innerHTML='';return;
}
if(state.tab==='Environment'&&state.view!=='home'){
 cat.className='panel environment-sidebar';
 cat.innerHTML='<button class="col-home '+(state.view==='category'?'active':'')+'" data-tab="Environment">▣ &nbsp;Environment Overview</button>'
  +'<div class="env-sidebar-heading">ATMOSPHERES</div>'
  +ENVIRONMENT_TOPICS.map((t,i)=>'<button class="env-nav '+(state.view==='environment'&&state.id===t.id?'active':'')+'" data-env-topic="'+escape(t.id)+'"><span class="env-nav-icon">'+['△','◉','♟'][i]+'</span><span>'+escape(t.title)+'</span></button>').join('');
 m.innerHTML='';return;
}
if(state.tab==='Station'&&state.view!=='home'){
 cat.className='panel station-sidebar';
 cat.innerHTML='<button class="col-home '+(state.view==='category'?'active':'')+'" data-tab="Station">▣ &nbsp;Station Overview</button>'
  +STATION_GROUPS.map(group=>'<div class="col-group">'+escape(group.title)+'</div>'
    +STATION_TOPICS.filter(t=>t.group===group.id).map(t=>'<button class="col-nav '+(state.view==='station'&&state.id===t.id?'active':'')+'" data-st-topic="'+escape(t.id)+'">'+escape(t.title)+'</button>').join('')).join('');
 m.innerHTML='';return;
}
if(state.tab==='Colonists'&&state.view!=='home'){
  cat.className='panel colonist-sidebar';
  cat.innerHTML='<button class="col-home '+(state.view==='category'?'active':'')+'" data-tab="Colonists">▣ &nbsp;Colonists Overview</button>'
    +COLONIST_GROUPS.map(group=>'<div class="col-group">'+escape(group.title)+'</div>'
      +COLONIST_TOPICS.filter(t=>t.group===group.id).map(t=>'<button class="col-nav '+(state.view==='colonist'&&state.id===t.id?'active':'')+'" data-col-topic="'+escape(t.id)+'">'+escape(t.title)+'</button>').join('')).join('');
  m.innerHTML='';return;
 }
 if(state.tab==='Technology'&&state.view!=='home'){cat.className='panel tech-list';cat.innerHTML='<div class="panel-title">TECHNOLOGIES</div>'+techGroups.map(group=>{const entries=TECHNOLOGIES.filter(t=>t.group===group);if(!entries.length)return '';return '<div class="tech-group">'+escape(group)+'</div>'+entries.map(t=>`<button class="tech-nav ${state.view==='tech'&&state.id===t.name?'active':''}" data-tech="${escape(t.name)}">${escape(t.name)} <small>Tier ${t.tier||'0'}</small></button>`).join('');}).join('');m.innerHTML='';return;}const available=all.filter(e=>e.kind===state.tab);cat.className='panel '+(detailed?'compact':'');if(!['Buildings','Items'].includes(state.tab)||state.view==='home'){cat.innerHTML='';m.innerHTML='';return;}
let categories=['All',...new Set(available.map(e=>e.category))].filter(Boolean).sort((a,b)=>a==='All'?-1:b==='All'?1:a.localeCompare(b));cat.innerHTML='<div class="panel-title">'+(detailed?'◈':'CATEGORIES')+'</div>'+categories.map((c,i)=>`<button class="category ${state.category===c?'active':''}" title="${escape(c)}" data-cat="${escape(c)}"><span class="cat-icon">${categoryIcon(c,i)}</span><span class="cat-name">${escape(c)}</span></button>`).join('');
if(!detailed){m.innerHTML='';return;}
const set=available.filter(x=>state.category==='All'||x.category===state.category).sort((a,b)=>a.title.localeCompare(b.title));const idx=set.findIndex(e=>e.id===state.id);const current=byId.get(state.id);const before=set[(idx-1+set.length)%set.length],after=set[(idx+1)%set.length];
m.innerHTML='<div id="chooser" class="quick"><div class="quick-row"><button title="Previous item" data-quick="prev">‹</button>'+[before,current,after].map(e=>e?`<button class="quick-entry ${e.id===state.id?'selected':''}" data-id="${e.id}" title="${escape(e.title)}"><img src="${img(e)}" alt=""><small>${escape(e.title)}</small></button>`:'').join('')+'<button title="Next item" data-quick="next">›</button></div><button class="all-items" data-showall="yes">All '+escape(state.category==='All'?state.tab:state.category)+' ↗</button></div><div class="panel-title toc-title">CONTENTS</div><div id="toc">'+(current?.sections||[]).map((x,i)=>`<button data-section="s${i}">${escape(x.heading)}</button>`).join('')+'</div>';
}
function categoryIcon(c,i){let s=c.toLowerCase();if(c==='All')return '▤';if(/food|cook|grow/.test(s))return '♧';if(/power|elect/.test(s))return 'ϟ';if(/industry|craft/.test(s))return '⚒';if(/base|hull/.test(s))return '▦';if(/comfort|furniture/.test(s))return '♜';if(/plumb|liquid|gas/.test(s))return '◉';if(/medical/.test(s))return '✚';return ['▣','◇','▧','⚙','◈'][i%5];}
function renderOverview(){let title=state.tab;let scope=all.filter(e=>e.kind===title);let subset=scope.filter(e=>state.category==='All'||e.category===state.category);
$('article').innerHTML=`<div class="overview"><h1>${escape(title)}${state.category!=='All'?' · '+escape(state.category):''}</h1><p class="intro">Choose a category on the left, then select a page below.</p><div class="result-grid">${subset.sort((a,b)=>a.title.localeCompare(b.title)).map(e=>`<button class="result" data-id="${e.id}"><img src="${img(e)}" alt=""><span>${escape(e.title)}</span></button>`).join('')||'<p>No matching pages.</p>'}</div></div>`;
$('related').innerHTML='';$('related').classList.add('hidden-panel');}
function renderHome(){$('article').innerHTML=`<div class="welcome"><div class="welcome-mark">RDC</div><h1>RED DUST COLONY</h1><h2>ENCYCLOPEDIA</h2><p>A field reference for buildings, items, research, colonists and the systems keeping your Martian settlement alive.</p><div class="home-options"><button data-home="Buildings"><b>▣</b> Explore Buildings <span>64 records</span></button><button data-home="Items"><b>◇</b> Explore Items <span>43 records</span></button><button data-home="Guidebook"><b>▤</b> Guidebook <span>24 guides</span></button><button data-home="Features"><b>☷</b> Explore Features <span>34 mechanics</span></button></div><small>RDCpedia demo · Source data: Red Dust Colony Wiki</small></div>`;$('related').innerHTML='';$('related').classList.add('hidden-panel');}
function renderDetail(){const e=byId.get(state.id);if(!e){renderOverview();return;}const props=Object.entries(e.meta||{}).filter(([k,v])=>v&& !['title','image','imagecaption'].includes(k));const sections=(e.sections||[]).map((s,i)=>`<section id="s${i}"><h2>${escape(s.heading)}</h2>${toHtml(s.raw)}</section>`).join('');const research=TECHNOLOGIES.find(t=>t.unlocks.some(n=>normalize(n)===normalize(e.title)));const techLink=research?`<div class="tech-research-link"><span>RESEARCH</span><button data-tech="${escape(research.name)}">${escape(research.name)} ↗</button></div>`:'';$('article').innerHTML=`<div class="detail"><h1>${escape(e.title)}</h1><div class="detail-head"><div class="item-art"><img src="${img(e)}" alt="${escape(e.title)}"></div><div class="properties">${props.map(([k,v])=>`<div><b>${escape(k.replace(/_/g,' '))}</b><span>${linkText(v)}</span></div>`).join('')}</div></div>${techLink}<div class="article-body">${sections}</div></div>`;
const text=Object.values(e.meta||{}).join(' ')+' '+(e.sections||[]).map(s=>s.raw).join(' ');const links=[...text.matchAll(/\[\[([^|\]#]+)|\{\{1\|([^|}]+)/g)].map(m=>m[1]||m[2]);let rel=[...new Set(links.map(x=>byName.get(normalize(x))?.id).filter(x=>x&&x!==e.id))].map(id=>byId.get(id));if(!rel.length)rel=all.filter(x=>x.kind===e.kind&&x.category===e.category&&x.id!==e.id).slice(0,6);
$('related').classList.remove('hidden-panel');$('related').innerHTML='<div class="panel-title">RELATED</div>'+rel.slice(0,12).map(r=>`<button class="related-link" data-id="${r.id}"><img src="${img(r)}" alt=""><span>${escape(r.title)}<small>${escape(r.kind==='Buildings'?'Building':'Item')}</small></span></button>`).join('');}
function renderTechnology(){const current=techByName.get(state.id)||TECHNOLOGIES[0];const opens=TECHNOLOGIES.filter(t=>t.requires.includes(current.name));const req=current.requires.map(n=>techByName.get(n)).filter(Boolean);const card=(t,selected=false)=>`<button class="tech-card ${selected?'selected':''}" data-tech="${escape(t.name)}"><strong>${escape(t.name)}</strong><small>${t.tier?'Tier '+t.tier:'Starting package'}</small></button>`;const techCol=(list,none)=>list.length?list.map(t=>card(t)).join(''):'<div class="tech-empty">'+none+'</div>';const unlocked=current.tier===0?'':`<section class="tech-unlocks"><h2>UNLOCKS</h2><div class="tech-unlocks-grid">${current.unlocks.map(name=>{const target=byName.get(normalize(name))||(name==='Cotton Project for Botany Station'?byName.get('cotton'):null);const picture=target?`<img src="${img(target)}" alt="" loading="lazy">`:'';return target?`<button class="tech-unlock" data-id="${escape(target.id)}">${picture}<span>${escape(name)}</span></button>`:`<span class="tech-unlock tech-not-linked">${picture}<span>${escape(name)}</span></span>`;}).join('')}</div></section>`;const basicResearch=byName.get(normalize('Basic Research Table'));$('article').innerHTML=`<div class="tech-page"><div class="tech-title"><h1>${escape(current.name)}</h1><span>${current.tier?'Tier '+current.tier:'Starting package'}</span></div><div class="tech-flow"><div class="tech-column"><div class="tech-col-title">PREREQUISITES</div>${techCol(req,'Starting technology')}</div><div class="tech-arrow">→</div><div class="tech-column"><div class="tech-col-title">SELECTED</div>${card(current,true)}</div><div class="tech-arrow">→</div><div class="tech-column"><div class="tech-col-title">OPENS</div>${techCol(opens,'No further available technologies')}</div></div><section><h2>DESCRIPTION</h2><p>${escape(current.description)}</p></section>${unlocked}</div>`;let related='<div class="panel-title">RELATED</div>';if(basicResearch)related+=`<button class="related-link" data-id="${escape(basicResearch.id)}"><span>Basic Research Table<small>Building</small></span></button>`;related+='<button class="related-link" data-tab="Guidebook"><span>Guidebook<small>Encyclopedia section</small></span></button>';$('related').innerHTML=related;$('related').classList.remove('hidden-panel');}
function renderTechnologyHome(){const researchTable=byName.get(normalize('Basic Research Table'));$('article').innerHTML=`<div class="tech-page tech-intro"><h1>Research & Technology</h1>
<p>Research allows your colony to expand beyond its starting equipment. By researching new technologies, colonists gain access to additional buildings and production capabilities, from essential life-support systems to agriculture, energy storage, and industrial processing.</p>
<h2>Getting started</h2>
<p>Research is performed at dedicated facilities such as the ${researchTable?'<button class="tech-inline-link" data-id="'+escape(researchTable.id)+'">Basic Research Table ↗</button>':'Basic Research Table'}. Build a research station, select a technology from the research tree, and assign a colonist who is permitted to perform research. Colonist skills and traits can influence research performance.</p>
<h2>Touchdown — your starting technologies</h2>
<p><button class="tech-inline-link" data-tech="Touchdown">Touchdown ↗</button> represents the initial technology package available from the moment the colony begins. It covers the essential equipment and building options you can use without completing additional research. These starting objects do not need to be unlocked individually.</p>
<h2>Technology tiers</h2>
<p><strong>Tier 1</strong> technologies establish the foundations of the colony. They can be researched using the Basic Research Table without researching other branches first.</p>
<p><strong>Tier 2</strong> technologies expand those foundations with improved systems and specialized production. They become available after the required earlier research has been completed.</p>
<h2>Using this encyclopedia</h2>
<p>Select a technology from the left-hand list to see its prerequisites, the technologies it opens next, and the buildings or other objects it unlocks. <strong>Opens</strong> means subsequent research; <strong>Unlocks</strong> means the objects made available by that research.</p>
</div>`;$('related').innerHTML='';$('related').classList.add('hidden-panel');}

/* Colonists: each link resolves to an actual encyclopedia page, never to an
   invented slug. Unavailable future sections remain visibly non-clickable. */
function colonistText(value){
 return escape(value).replace(/\[\[(topic|building|item|tech|tab):([^\]|]+)(?:\|([^\]]+))?\]\]/g,(_match,kind,key,label)=>{
  const safe=label||key, lookupKey=decodeEscapedLinkToken(key);
  if(kind==='topic'){return colonistById.has(lookupKey)?'<button class="col-inline" data-col-topic="'+key+'">'+safe+' ↗</button>':safe;}
  if(kind==='building'||kind==='item'){
    const found=byName.get(normalize(lookupKey));return found&&found.kind===(kind==='building'?'Buildings':'Items')
      ?'<button class="col-inline" data-id="'+escape(found.id)+'">'+safe+' ↗</button>':safe;
  }
  if(kind==='tech')return techByName.has(lookupKey)?'<button class="col-inline" data-tech="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='tab')return ['Buildings','Items','Technology','Colonists'].includes(lookupKey)
    ?'<button class="col-inline" data-tab="'+key+'">'+safe+' ↗</button>'
    :'<span class="col-unavailable" title="This encyclopedia section is not yet available">'+safe+'</span>';
  return safe;
 });
}
function renderColonistRelated(t){
 const buttons=(t.related||[]).map(ref=>{
  const at=ref.indexOf(':');const kind=ref.slice(0,at),key=ref.slice(at+1);
  if(kind==='topic'){
   const target=colonistById.get(key);
   return target&&target.id!==t.id?'<button class="related-link" data-col-topic="'+escape(key)+'"><span>'+escape(target.title)+'<small>Colonists</small></span></button>':'';
  }
  if(kind==='building'||kind==='item'){
   const target=byName.get(normalize(key));
   return target&&target.kind===(kind==='building'?'Buildings':'Items')?'<button class="related-link" data-id="'+escape(target.id)+'"><img src="'+img(target)+'" alt="" loading="lazy"><span>'+escape(target.title)+'<small>'+escape(kind==='building'?'Building':'Item')+'</small></span></button>':'';
  }
  if(kind==='tech'){
   return techByName.has(key)?'<button class="related-link" data-tech="'+escape(key)+'"><span>'+escape(key)+'<small>Technology</small></span></button>':'';
  }
  return '';
 }).filter(Boolean);
 $('related').innerHTML='<div class="panel-title">RELATED</div>'+buttons.slice(0,12).join('');
 $('related').classList.toggle('hidden-panel',!buttons.length);
}
function renderColonistHome(){
 const featured=[
  ['conditions','◈','Daily needs','Energy, food, bladder and social contact'],
  ['atmosphere','◉','Survival','Safe air, suit oxygen and station life support'],
  ['health','✚','Health','Injuries, care and nutrition'],
  ['mood','☼','Mood','Wellbeing, stress and accident risk'],
  ['skills','⚒','Work & growth','Skills, attributes and priorities'],
  ['traits','♟','Traits','Strengths, restrictions and behaviour']
 ];
 const groups=COLONIST_GROUPS.map(g=>'<section class="col-intro-group"><h2>'+escape(g.title)+'</h2><div class="col-intro-links">'+COLONIST_TOPICS.filter(t=>t.group===g.id).map(t=>'<button data-col-topic="'+escape(t.id)+'">'+escape(t.title)+' <span>›</span></button>').join('')+'</div></section>').join('');
 $('article').innerHTML='<div class="colonist-article col-intro"><p class="col-eyebrow">CREW REFERENCE</p><h1>Colonists & Survival</h1><p class="col-lead">Colonists are the workforce and the people your Martian station must keep alive. Their needs, health, skills, traits and daily schedules all influence whether the colony can function safely.</p><p>This section follows the colonist from crew selection to day-to-day survival, work, wellbeing and emergencies. Choose a topic from the left-hand list, or start with one of the essentials below.</p><div class="col-feature-grid">'+featured.map(f=>'<button class="col-feature" data-col-topic="'+f[0]+'"><span class="col-feature-icon">'+f[1]+'</span><strong>'+f[2]+'</strong><small>'+f[3]+'</small></button>').join('')+'</div><h2>Browse all topics</h2><div class="col-intro-groups">'+groups+'</div><p class="col-reference-note">Content is based on the Red Dust Colony demo wiki. Where the wiki gives approximate values or describes features outside the demo, the individual articles say so.</p></div>';
 $('related').innerHTML='';$('related').classList.add('hidden-panel');
}
function colonistTraitsTable(){
 const rows=(items)=>'<div class="col-traits-list">'+items.map(pair=>'<div class="col-trait"><strong>'+escape(pair[0])+'</strong><span>'+escape(pair[1])+'</span></div>').join('')+'</div>';
 return '<section class="col-traits"><h2>Positive traits</h2>'+rows(COLONIST_TRAITS.positive)+'<h2>Negative and mixed traits</h2>'+rows(COLONIST_TRAITS.negative)+'</section>';
}
function renderColonistTopic(){
 const t=colonistById.get(state.id);
 if(!t){renderColonistHome();return;}
 const sections=t.sections.map((s,i)=>'<section class="col-section" id="col-section-'+i+'"><h2>'+escape(s.title)+'</h2>'+(s.paragraphs||[]).map(p=>'<p>'+colonistText(p)+'</p>').join('')+(s.bullets&&s.bullets.length?'<ul>'+s.bullets.map(b=>'<li>'+colonistText(b)+'</li>').join('')+'</ul>':'')+'</section>').join('');
 $('article').innerHTML='<div class="colonist-article"><p class="col-eyebrow">'+escape(COLONIST_GROUPS.find(g=>g.id===t.group)?.title||'Colonists')+'</p><h1>'+escape(t.title)+'</h1><p class="col-lead">'+escape(t.lead)+'</p>'+sections+(t.id==='traits'?colonistTraitsTable():'')+'<div class="col-end-links"><button data-tab="Colonists">‹ Colonists Overview</button></div></div>';
 renderColonistRelated(t);
}


/* Station is kept independent of existing Building/Item/Technology/Colonist records. */
function stationText(value){
 return escape(value).replace(/\[\[(station|colonist|building|item|tech|tab):([^\]|]+)(?:\|([^\]]+))?\]\]/g,(_match,kind,key,label)=>{
  const safe=label||key, lookupKey=decodeEscapedLinkToken(key);
  if(kind==='station')return stationById.has(lookupKey)?'<button class="col-inline" data-st-topic="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='colonist')return colonistById.has(lookupKey)?'<button class="col-inline" data-col-topic="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='building'||kind==='item'){
   const e=byName.get(normalize(lookupKey));
   return e&&e.kind===(kind==='building'?'Buildings':'Items')?'<button class="col-inline" data-id="'+escape(e.id)+'">'+safe+' ↗</button>':safe;
  }
  if(kind==='tech')return techByName.has(lookupKey)?'<button class="col-inline" data-tech="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='tab')return ['Buildings','Items','Technology','Colonists','Station'].includes(lookupKey)
   ?'<button class="col-inline" data-tab="'+key+'">'+safe+' ↗</button>'
   :'<span class="col-unavailable" title="Section not yet available">'+safe+'</span>';
  return safe;
 });
}
function renderStationRelated(t){
 const html=(t.related||[]).map(ref=>{
  const colon=ref.indexOf(':'),kind=ref.slice(0,colon),key=ref.slice(colon+1);
  if(kind==='station'){
   const s=stationById.get(key);
   return s&&s.id!==t.id?'<button class="related-link" data-st-topic="'+escape(key)+'"><span>'+escape(s.title)+'<small>Station</small></span></button>':'';
  }
  if(kind==='colonist'){
   const c=colonistById.get(key);
   return c?'<button class="related-link" data-col-topic="'+escape(key)+'"><span>'+escape(c.title)+'<small>Colonists</small></span></button>':'';
  }
  if(kind==='building'||kind==='item'){
   const e=byName.get(normalize(key));
   return e&&e.kind===(kind==='building'?'Buildings':'Items')?'<button class="related-link" data-id="'+escape(e.id)+'"><img src="'+img(e)+'" alt="" loading="lazy"><span>'+escape(e.title)+'<small>'+escape(kind==='building'?'Building':'Item')+'</small></span></button>':'';
  }
  if(kind==='tech')return techByName.has(key)?'<button class="related-link" data-tech="'+escape(key)+'"><span>'+escape(key)+'<small>Technology</small></span></button>':'';
  return '';
 }).filter(Boolean);
 $('related').innerHTML='<div class="panel-title">RELATED</div>'+html.slice(0,12).join('');
 $('related').classList.toggle('hidden-panel',!html.length);
}
function renderStationHome(){
 const featured=[
  ['hulls','▦','Hull & expansion','Floors, pressure boundaries and structural limits'],
  ['priority','⚒','Tools & priorities','Building, Hull and Wires filters'],
  ['power','ϟ','Power grid','Wires, generators and batteries'],
  ['atmosphere','◉','Life support','Oxygen, carbon dioxide and safe interiors'],
  ['rooms','▤','Rooms','Recognised areas and their actual effects'],
  ['overlays','◈','Overlays','Diagnose air, power, rooms and resources']
 ];
 const groups=STATION_GROUPS.map(g=>'<section class="col-intro-group"><h2>'+escape(g.title)+'</h2><div class="col-intro-links">'+STATION_TOPICS.filter(t=>t.group===g.id).map(t=>'<button data-st-topic="'+escape(t.id)+'">'+escape(t.title)+' <span>›</span></button>').join('')+'</div></section>').join('');
 $('article').innerHTML='<div class="colonist-article station-article col-intro"><p class="col-eyebrow">BASE SYSTEMS REFERENCE</p><h1>Station & Infrastructure</h1><p class="col-lead">Your station is a connected system of hull, machinery, life support, utilities, rooms, logistics and worker assignments. Building a structure is only the first step; keeping it accessible and operational is the real challenge.</p><p>Choose a topic from the left-hand index, or start with the six essentials below. This reference combines information from construction, rooms, management, HUD tools, storage, building articles and demo events.</p><div class="col-feature-grid">'+featured.map(f=>'<button class="col-feature" data-st-topic="'+f[0]+'"><span class="col-feature-icon">'+f[1]+'</span><strong>'+f[2]+'</strong><small>'+f[3]+'</small></button>').join('')+'</div><h2>Browse all topics</h2><div class="col-intro-groups">'+groups+'</div><p class="col-reference-note">The figures and restrictions here reflect documented demo-era behaviour. Inactive systems or unverified behaviours are not represented as completed gameplay features.</p></div>';
 $('related').innerHTML='';$('related').classList.add('hidden-panel');
}
function renderStationTopic(){
 const t=stationById.get(state.id);
 if(!t){renderStationHome();return;}
 const sections=t.sections.map((s,i)=>'<section class="col-section" id="station-section-'+i+'"><h2>'+escape(s.title)+'</h2>'+(s.paragraphs||[]).map(p=>'<p>'+stationText(p)+'</p>').join('')+(s.bullets&&s.bullets.length?'<ul>'+s.bullets.map(b=>'<li>'+stationText(b)+'</li>').join('')+'</ul>':'')+'</section>').join('');
 $('article').innerHTML='<div class="colonist-article station-article"><p class="col-eyebrow">'+escape(STATION_GROUPS.find(g=>g.id===t.group)?.title||'Station')+'</p><h1>'+escape(t.title)+'</h1><p class="col-lead">'+escape(t.lead)+'</p>'+sections+'<div class="col-end-links"><button data-tab="Station">‹ Station Overview</button></div></div>';
 renderStationRelated(t);
}


/* Environment: three linked explanatory articles, not more small topic pages.
   Verified demo descriptions remain distinct from player observations. */
function environmentText(value){
 let html=escape(value).replace(/\[\[(environment|station|colonist|building|item|tech|tab):([^\]|]+)(?:\|([^\]]+))?\]\]/g,(_match,kind,key,label)=>{
  const safe=label||key, lookupKey=decodeEscapedLinkToken(key);
  if(kind==='environment')return environmentById.has(lookupKey)?'<button class="col-inline" data-env-topic="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='station')return stationById.has(lookupKey)?'<button class="col-inline" data-st-topic="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='colonist')return colonistById.has(lookupKey)?'<button class="col-inline" data-col-topic="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='building'||kind==='item'){
   const e=byName.get(normalize(lookupKey));
   return e&&e.kind===(kind==='building'?'Buildings':'Items')?'<button class="col-inline" data-id="'+escape(e.id)+'">'+safe+' ↗</button>':safe;
  }
  if(kind==='tech')return techByName.has(lookupKey)?'<button class="col-inline" data-tech="'+key+'">'+safe+' ↗</button>':safe;
  if(kind==='tab')return ['Buildings','Items','Technology','Colonists','Station','Environment'].includes(lookupKey)
   ?'<button class="col-inline" data-tab="'+key+'">'+safe+' ↗</button>'
   :'<span class="col-unavailable" title="Section not yet available">'+safe+'</span>';
  return safe;
 });
 html=html.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
 return html;
}
function renderEnvironmentRelated(t){
 const html=(t.related||[]).map(ref=>{
  const n=ref.indexOf(':'),kind=ref.slice(0,n),key=ref.slice(n+1);
  if(kind==='environment'){const e=environmentById.get(key);return e&&e.id!==t.id?'<button class="related-link" data-env-topic="'+escape(key)+'"><span>'+escape(e.title)+'<small>Environment</small></span></button>':'';}
  if(kind==='station'){const s=stationById.get(key);return s?'<button class="related-link" data-st-topic="'+escape(key)+'"><span>'+escape(s.title)+'<small>Station</small></span></button>':'';}
  if(kind==='colonist'){const c=colonistById.get(key);return c?'<button class="related-link" data-col-topic="'+escape(key)+'"><span>'+escape(c.title)+'<small>Colonists</small></span></button>':'';}
  if(kind==='building'||kind==='item'){
   const e=byName.get(normalize(key));
   return e&&e.kind===(kind==='building'?'Buildings':'Items')?'<button class="related-link" data-id="'+escape(e.id)+'"><img src="'+img(e)+'" alt="" loading="lazy"><span>'+escape(e.title)+'<small>'+escape(kind==='building'?'Building':'Item')+'</small></span></button>':'';
  }
  if(kind==='tech')return techByName.has(key)?'<button class="related-link" data-tech="'+escape(key)+'"><span>'+escape(key)+'<small>Technology</small></span></button>':'';
  return '';
 }).filter(Boolean);
 $('related').innerHTML='<div class="panel-title">RELATED</div>'+html.slice(0,12).join('');
 $('related').classList.toggle('hidden-panel',!html.length);
}
function renderEnvironmentHome(){
 const details={
  outdoor:'Surface conditions, dust storms, weather restrictions and consequences for outdoor work and power generation.',
  indoor:'Life-support conditions inside the hull: oxygen supply, rising carbon dioxide and movement of air between rooms.',
  social:'Shared leisure time, social needs, Mood and the risk of mental breakdowns.'
 };
 const icons={outdoor:'△',indoor:'◉',social:'♟'};
 $('article').innerHTML='<div class="colonist-article env-article env-intro">'
  +'<p class="col-eyebrow">ENVIRONMENTAL SYSTEMS</p><h1>Environment</h1>'
  +'<p class="col-lead">The conditions around and inside your Martian station influence both its infrastructure and the people who live there. Environment covers three connected atmospheres: the surface, the air inside the base and the social conditions of the crew.</p>'
  +'<p>These pages focus on <strong>why conditions matter and what happens when they deteriorate</strong>. Station explains how to build and operate the equipment; Colonists explains the needs and health of individual people.</p>'
  +'<div class="env-home-grid">'+ENVIRONMENT_TOPICS.map(t=>'<button class="env-home-card" data-env-topic="'+escape(t.id)+'"><span class="env-home-icon">'+icons[t.id]+'</span><span class="env-home-name">'+escape(t.title)+'</span><small>'+escape(details[t.id])+'</small><span class="env-home-more">Explore →</span></button>').join('')+'</div>'
  +'<h2>How these systems connect</h2>'
  +'<p>A dust storm can interrupt solar generation and put life support at risk. Low oxygen or excess CO2 directly threaten physical health. Poor social conditions and stressful work can then reduce Mood and increase accident or breakdown risks. None of these systems can be managed reliably in isolation.</p>'
  +'<p class="col-reference-note">Based on the demo-era Red Dust Colony wiki. Approximate thresholds, inactive mechanics and player-observed behaviour are identified within the articles.</p></div>';
 $('related').innerHTML='';$('related').classList.add('hidden-panel');
}
function renderEnvironmentTopic(){
 const t=environmentById.get(state.id);
 if(!t){renderEnvironmentHome();return;}
 const sections=t.sections.map((s,i)=>'<section class="col-section" id="environment-section-'+i+'"><h2>'+escape(s.title)+'</h2>'+(s.paragraphs||[]).map(p=>'<p>'+environmentText(p)+'</p>').join('')+(s.bullets&&s.bullets.length?'<ul>'+s.bullets.map(b=>'<li>'+environmentText(b)+'</li>').join('')+'</ul>':'')+'</section>').join('');
 $('article').innerHTML='<div class="colonist-article env-article"><p class="col-eyebrow">ENVIRONMENT</p><h1>'+escape(t.title)+'</h1><p class="env-subtitle">'+escape(t.subtitle)+'</p><p class="col-lead">'+escape(t.lead)+'</p>'+sections+'<div class="col-end-links"><button data-tab="Environment">‹ Environment Overview</button></div></div>';
 renderEnvironmentRelated(t);
}


/* A Feature explains a playable mechanic; a Guide provides a result-oriented
   sequence. Shared compact entities use authentic catalog art only. */
function fgRefButton(ref){
 const split=ref.indexOf(':'),kind=ref.slice(0,split),key=ref.slice(split+1);
 if(kind==='feature'){const t=featureById.get(key);return t?'<button class="related-link" data-feature="'+escape(key)+'"><span>'+escape(t.title)+'<small>Feature</small></span></button>':'';}
 if(kind==='guide'){const t=guideById.get(key);return t?'<button class="related-link" data-guide="'+escape(key)+'"><span>'+escape(t.title)+'<small>Guidebook</small></span></button>':'';}
 if(kind==='building'||kind==='item'){
  const e=byName.get(normalize(key));return e&&e.kind===(kind==='building'?'Buildings':'Items')
   ?'<button class="related-link" data-id="'+escape(e.id)+'"><img src="'+img(e)+'" alt="" loading="lazy"><span>'+escape(e.title)+'<small>'+escape(e.kind==='Buildings'?'Building':'Item')+'</small></span></button>':'';
 }
 if(kind==='tech'){const t=techByName.get(key);return t?'<button class="related-link" data-tech="'+escape(key)+'"><span>'+escape(t.name)+'<small>Technology</small></span></button>':'';}
 if(kind==='station'){const t=stationById.get(key);return t?'<button class="related-link" data-st-topic="'+escape(key)+'"><span>'+escape(t.title)+'<small>Station</small></span></button>':'';}
 if(kind==='colonist'){const t=colonistById.get(key);return t?'<button class="related-link" data-col-topic="'+escape(key)+'"><span>'+escape(t.title)+'<small>Colonists</small></span></button>':'';}
 if(kind==='environment'){const t=environmentById.get(key);return t?'<button class="related-link" data-env-topic="'+escape(key)+'"><span>'+escape(t.title)+'<small>Environment</small></span></button>':'';}
 return '';
}
function fgRelated(refs){
 const seen=new Set();const buttons=(refs||[]).filter(x=>{if(seen.has(x))return false;seen.add(x);return true}).map(fgRefButton).filter(Boolean);
 $('related').innerHTML='<div class="panel-title">RELATED</div>'+buttons.slice(0,14).join('');
 $('related').classList.toggle('hidden-panel',!buttons.length);
}
function fgGroupIndex(groups,records,kind){
 const attr=kind==='guide'?'data-guide':'data-feature';
 return groups.map(g=>'<section class="fg-home-group"><div class="fg-group-heading"><span class="fg-group-icon">'+escape(g.icon)+'</span><h2>'+escape(g.title)+'</h2><small>'+records.filter(x=>x.group===g.id).length+' topics</small></div>'
 +'<div class="fg-index-cards">'+records.filter(x=>x.group===g.id).map(t=>'<button class="fg-index-card" '+attr+'="'+escape(t.id)+'"><span class="fg-index-id">'+escape(t.id)+'</span><strong>'+escape(t.title)+'</strong><span class="fg-index-desc">'+escape(kind==='guide'?t.goal:t.summary)+'</span><span class="fg-index-open">›</span></button>').join('')+'</div></section>').join('');
}
function renderFeaturesHome(){
 $('article').innerHTML='<div class="colonist-article fg-article fg-home"><p class="col-eyebrow">GAME MECHANICS REFERENCE</p><h1>Features</h1>'
 +'<p class="col-lead">Discover what Red Dust Colony lets you do and what each system changes. Features explain how the game works; Guidebook shows you how to achieve a result step by step.</p>'
 +'<p>There are 34 distinct mechanics in six groups. Each short feature links to a practical guide where one is useful, plus the related buildings, items and reference pages.</p>'
 +'<div class="fg-crosslink"><span>Need help doing something?</span><button data-tab="Guidebook">Open Guidebook →</button></div>'
 +fgGroupIndex(FEATURE_GROUPS,FEATURES,'feature')+'</div>';
 $('related').innerHTML='';$('related').classList.add('hidden-panel');
}
function renderFeature(){
 const t=featureById.get(state.id);if(!t){renderFeaturesHome();return;}
 const group=FEATURE_GROUPS.find(x=>x.id===t.group),gs=t.guides.map(id=>guideById.get(id)).filter(Boolean);
 const points='<ul class="fg-keypoints">'+t.points.map(p=>'<li>'+escape(p)+'</li>').join('')+'</ul>';
 const guideLinks=gs.length?'<div class="fg-lesson-list">'+gs.map(g=>'<button class="fg-lesson" data-guide="'+escape(g.id)+'"><span class="fg-lesson-icon">▤</span><span><strong>'+escape(g.title)+'</strong><small>'+escape(g.goal)+'</small></span><span>›</span></button>').join('')+'</div>':
 '<p class="fg-muted">This feature is informational and does not require a separate step-by-step guide.</p>';
 $('article').innerHTML='<div class="colonist-article fg-article"><p class="col-eyebrow">'+escape(group?.title||'Features')+' · '+escape(t.id)+'</p>'
 +'<h1>'+escape(t.title)+'</h1><p class="col-lead">'+escape(t.summary)+'</p>'
 +'<section class="fg-section"><h2>How it works</h2>'+points+'</section>'
 +'<section class="fg-section"><h2>Practical guides</h2>'+guideLinks+'</section>'
 +'<div class="col-end-links"><button data-tab="Features">‹ Features Overview</button></div></div>';
 fgRelated(t.related);
}
function renderGuidebookHome(){
 $('article').innerHTML='<div class="colonist-article fg-article fg-home"><p class="col-eyebrow">PRACTICAL HELP</p><h1>Guidebook</h1>'
 +'<p class="col-lead">Want to achieve something in the colony? Pick a goal and follow the requirements, steps, success check and troubleshooting tips. The guides link directly to the relevant mechanics and buildings.</p>'
 +'<p>24 hands-on guides are collected in eight groups. They use real building and item art; videos are not necessary for the first version.</p>'
 +'<div class="fg-crosslink"><span>Looking for a mechanic explanation?</span><button data-tab="Features">Explore Features →</button></div>'
 +fgGroupIndex(GUIDE_GROUPS,GUIDES,'guide')+'</div>';
 $('related').innerHTML='';$('related').classList.add('hidden-panel');
}
function fgVisual(refs,guideId){
 const chainIds=new Set(['G07','G09','G11','G12','G13','G15','G16','G21']);
 const isChain=chainIds.has(guideId);
 const imgs=(refs||[]).map(token=>{const n=token.indexOf(':'),kind=token.slice(0,n),key=token.slice(n+1);
  const e=byName.get(normalize(key));
  return e&&e.kind===(kind==='building'?'Buildings':'Items')
   ?'<button class="fg-visual-item" data-id="'+escape(e.id)+'" title="'+escape(e.title)+'"><img src="'+img(e)+'" alt="" loading="lazy"><span>'+escape(e.title)+'</span></button>':'';
 }).filter(Boolean);
 return imgs.length?'<div class="fg-visual"><div class="fg-visual-caption">'+(isChain?'EXAMPLE CHAIN / CONNECTION':'RELEVANT EQUIPMENT &amp; MATERIALS')+'</div><div class="fg-visual-scroll">'+imgs.join(isChain?'<span class="fg-visual-arrow" aria-hidden="true">→</span>':'<span class="fg-visual-dot" aria-hidden="true">·</span>')+'</div></div>':'';
}
function renderGuide(){
 const g=guideById.get(state.id);if(!g){renderGuidebookHome();return;}
 const group=GUIDE_GROUPS.find(x=>x.id===g.group),matching=FEATURES.filter(f=>f.guides.includes(g.id));
 const steps='<ol class="fg-steps">'+g.steps.map(s=>'<li>'+escape(s)+'</li>').join('')+'</ol>';
 const featureLinks=matching.length?'<section class="fg-section"><h2>Related game mechanics</h2><div class="fg-feature-links">'
  +matching.map(f=>'<button data-feature="'+escape(f.id)+'">'+escape(f.title)+' <span>↗</span></button>').join('')+'</div></section>':'';
 $('article').innerHTML='<div class="colonist-article fg-article fg-guide"><p class="col-eyebrow">'+escape(group?.title||'Guidebook')+' · '+escape(g.id)+'</p>'
 +'<h1>'+escape(g.title)+'</h1><p class="col-lead">'+escape(g.goal)+'</p>'+fgVisual(g.visual,g.id)
 +'<section class="fg-section"><h2>Before you begin</h2><p>'+escape(g.requirements)+'</p></section>'
 +'<section class="fg-section"><h2>Step by step</h2>'+steps+'</section>'
 +'<section class="fg-section fg-success"><h2>How to verify success</h2><p>'+escape(g.success)+'</p></section>'
 +'<section class="fg-section fg-trouble"><h2>If it does not work</h2><p>'+escape(g.troubleshooting)+'</p></section>'
 +featureLinks+'<div class="col-end-links"><button data-tab="Guidebook">‹ Guidebook Overview</button></div></div>';
 fgRelated([...g.related,...matching.slice(0,5).map(t=>'feature:'+t.id)]);
}

function renderPlaceholder(){$('article').innerHTML=`<div class="overview"><h1>${escape(state.tab)}</h1><p class="intro">This section is prepared for the thematic wiki content. Its source articles have not yet been integrated in this preview.</p></div>`;$('related').innerHTML='';$('related').classList.add('hidden-panel');}
function render(){renderTabs();renderCrumb();renderCategory();$('workspace').className=state.view==='detail'||state.view==='tech'?'detail-mode':state.view==='home'?'home-mode':'index-mode';if(state.view==='tech')$('workspace').classList.add('technology-mode');if(state.tab==='Colonists'&&state.view!=='home')$('workspace').classList.add('colonists-mode');if(state.tab==='Station'&&state.view!=='home')$('workspace').classList.add('station-mode');if(state.tab==='Environment'&&state.view!=='home')$('workspace').classList.add('environment-mode');if(state.tab==='Environment'&&state.view==='category')$('workspace').classList.add('environment-overview');if(['Guidebook','Features'].includes(state.tab)&&state.view!=='home'){$('workspace').classList.add('features-mode');if(state.view==='category')$('workspace').classList.add('features-overview');}if(state.tab==='Technology'&&state.view==='category')$('workspace').classList.add('technology-index');if(state.view==='home')renderHome();else if(state.view==='detail')renderDetail();else if(state.view==='tech')renderTechnology();else if(state.tab==='Technology')renderTechnologyHome();else if(state.view==='colonist')renderColonistTopic();else if(state.tab==='Colonists')renderColonistHome();else if(state.view==='station')renderStationTopic();else if(state.tab==='Station')renderStationHome();else if(state.view==='environment')renderEnvironmentTopic();else if(state.tab==='Environment')renderEnvironmentHome();else if(state.view==='feature')renderFeature();else if(state.tab==='Features')renderFeaturesHome();else if(state.view==='guide')renderGuide();else if(state.tab==='Guidebook')renderGuidebookHome();else if(['Buildings','Items'].includes(state.tab))renderOverview();else renderPlaceholder();$('article').scrollTop=0;}
function clickEvent(e){let b=e.target.closest('button,a[data-link]');if(!b)return;if(b.dataset.feature){featureDetail(b.dataset.feature);return;}if(b.dataset.guide){guideDetail(b.dataset.guide);return;}if(b.dataset.envTopic){environmentDetail(b.dataset.envTopic);return;}if(b.dataset.stTopic){stationDetail(b.dataset.stTopic);return;}if(b.dataset.colTopic){colonistDetail(b.dataset.colTopic);return;}if(b.dataset.tech){techDetail(b.dataset.tech);return;}if(b.dataset.tab){categoryView(b.dataset.tab);return;}if(b.dataset.crumb){let c=b.dataset.crumb;if(c==='home')goto({view:'home',tab:'Buildings',category:'All',id:null});if(c==='tab')categoryView(state.tab);if(c==='cat')categoryView(state.tab,state.category);return;}if(b.dataset.cat){categoryView(state.tab,b.dataset.cat);return;}if(b.dataset.id){const v=byId.get(b.dataset.id);if(v)detail(v);return;}if(b.dataset.home){categoryView(b.dataset.home);return;}if(b.dataset.showall){categoryView(state.tab,state.category);return;}if(b.dataset.quick){let set=all.filter(x=>x.kind===state.tab&&(state.category==='All'||x.category===state.category)).sort((a,b)=>a.title.localeCompare(b.title));let i=set.findIndex(x=>x.id===state.id);let n=set[(i+(b.dataset.quick==='next'?1:-1)+set.length)%set.length];if(n)detail(n);return;}if(b.dataset.section){$('article').querySelector('#'+b.dataset.section)?.scrollIntoView({behavior:'smooth',block:'start'});return;}if(b.dataset.link){let dest=byName.get(normalize(b.dataset.link));if(dest)detail(dest);return;}}
$('pedia').addEventListener('click',clickEvent);
$('brand').onclick=()=>goto({view:'home',tab:'Buildings',category:'All',id:null});
$('open-button').onclick=()=>{$('overlay').classList.remove('hidden');render();};
$('close').onclick=()=>{$('overlay').classList.add('hidden');};
$('back').onclick=()=>{if(position>0){position--;state={...visits[position]};clearSearch();render();}};
$('forward').onclick=()=>{if(position<visits.length-1){position++;state={...visits[position]};clearSearch();render();}};
$('search').addEventListener('input',showSuggestions);
$('search').addEventListener('keydown',e=>{
 if(e.key==='Escape'){clearSearch();e.stopPropagation();return;}
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){if(!suggestions.length)return;e.preventDefault();selectedSuggestion=(selectedSuggestion+(e.key==='ArrowDown'?1:-1)+suggestions.length)%suggestions.length;$('search-suggest').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-selected',String(i===selectedSuggestion)));$('search-suggest').querySelectorAll('button')[selectedSuggestion]?.scrollIntoView({block:'nearest'});return;}
 if(e.key==='Enter'){e.preventDefault();selectSuggestion(selectedSuggestion);}
});
$('search-suggest').addEventListener('click',e=>{const b=e.target.closest('[data-search-id]');if(!b)return;const found=byId.get(b.dataset.searchId);if(found)detail(found);});
document.addEventListener('click',e=>{if(!e.target.closest('#search-area'))$('search-suggest').hidden=true;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('overlay').classList.contains('hidden'))$('overlay').classList.add('hidden');});
render();
})();
