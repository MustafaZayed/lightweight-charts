"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5184],{9176:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>O,contentTitle:()=>u,default:()=>g,frontMatter:()=>h,metadata:()=>C,toc:()=>_});var a=n(7462),r=n(7294),o=n(3905),i=n(6383),l=n(3296);var s=n(2300);const c=t=>{const{data:e,colors:{backgroundColor:n=CHART_BACKGROUND_COLOR,lineColor:a=LINE_LINE_COLOR,textColor:o=CHART_TEXT_COLOR,areaTopColor:i=AREA_TOP_COLOR,areaBottomColor:l=AREA_BOTTOM_COLOR}}=t,c=(0,r.useRef)();return(0,r.useEffect)((()=>{const t=()=>{r.applyOptions({width:c.current.clientWidth})},r=(0,s.C2)(c.current,{layout:{background:{type:s.Mr.Solid,color:n},textColor:o},width:c.current.clientWidth,height:300});r.timeScale().fitContent();return r.addAreaSeries({lineColor:a,topColor:i,bottomColor:l}).setData(e),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),r.remove()}}),[e,n,a,o,i,l]),r.createElement("div",{ref:c})},p=[{time:"2018-12-22",value:32.51},{time:"2018-12-23",value:31.11},{time:"2018-12-24",value:27.02},{time:"2018-12-25",value:27.32},{time:"2018-12-26",value:25.17},{time:"2018-12-27",value:28.89},{time:"2018-12-28",value:25.46},{time:"2018-12-29",value:23.92},{time:"2018-12-30",value:22.68},{time:"2018-12-31",value:22.67}];function m(t){return r.createElement(c,(0,a.Z)({},t,{data:p}))}var d=n(5804);const h={sidebar_label:"Simple example",hide_table_of_contents:!0},u="React - Simple example",C={unversionedId:"react/simple",id:"react/simple",title:"React - Simple example",description:"The following only describes a relatively simple example that only renders an area series that could be tweaked to render any other type of series.",source:"@site/tutorials/react/01-simple.mdx",sourceDirName:"react",slug:"/react/simple",permalink:"/lightweight-charts/tutorials/react/simple",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Simple example",hide_table_of_contents:!0},sidebar:"tutorialsSidebar",previous:{title:"Tutorials",permalink:"/lightweight-charts/tutorials/"},next:{title:"Advanced example",permalink:"/lightweight-charts/tutorials/react/advanced"}},O={},_=[{value:"Preparing your project",id:"preparing-your-project",level:2},{value:"Creating a charting component",id:"creating-a-charting-component",level:2}],R={toc:_};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},R,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react---simple-example"},"React - Simple example"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following only describes a relatively simple example that only renders an ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types#area"},"area series")," that could be tweaked to render any other type of ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types"},"series"),"."),(0,o.kt)("p",{parentName:"div"},"For a more complete scenario where you could wrap Lightweight Charts into a component having sub components, please consult this ",(0,o.kt)("a",{parentName:"p",href:"./advanced"},"example"),"."))),(0,o.kt)("p",null,"On this page you will learn how to easily use Lightweight Charts with React."),(0,o.kt)("h2",{id:"preparing-your-project"},"Preparing your project"),(0,o.kt)("p",null,"For the example purpose we are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brandiqa/react-parcel-starter"},"Parcel starter kit")," but feel free to use any other tool or starter kit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone git@github.com:brandiqa/react-parcel-starter.git lwc-react\ncd lwc-react\nnpm install\n")),(0,o.kt)("p",null,"To run your project simply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm start\n")),(0,o.kt)("p",null,"This will create a web page accessible by default on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:1234/"},"http://localhost:1234/"),"."),(0,o.kt)("h2",{id:"creating-a-charting-component"},"Creating a charting component"),(0,o.kt)("p",null,"The example ",(0,o.kt)("em",{parentName:"p"},"React component")," on this page may not fit your requirements completely. Creating a general purpose declarative wrapper for Lightweight Charts' imperative API is a challenge, but hopefully you can adapt this example to your use case."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For this example we are using props to set chart colors based on the current theme (light or dark). In your real code it might be a better idea to use a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#when-to-use-context"},"Context"),"."))),(0,o.kt)(l.Z,{replaceThemeConstants:!0,className:"language-jsx",mdxType:"CodeBlock"},"import { createChart, ColorType } from 'lightweight-charts';\nimport React, { useEffect, useRef } from 'react';\n\nexport const ChartComponent = props => {\n\tconst {\n\t\tdata,\n\t\tcolors: {\n\t\t\tbackgroundColor = CHART_BACKGROUND_COLOR,\n\t\t\tlineColor = LINE_LINE_COLOR,\n\t\t\ttextColor = CHART_TEXT_COLOR,\n\t\t\tareaTopColor = AREA_TOP_COLOR,\n\t\t\tareaBottomColor = AREA_BOTTOM_COLOR,\n\t\t},\n\t} = props;\n\tconst chartContainerRef = useRef();\n\n\tuseEffect(\n\t\t() => {\n\t\t\tconst handleResize = () => {\n\t\t\t\tchart.applyOptions({ width: chartContainerRef.current.clientWidth });\n\t\t\t};\n\n\t\t\tconst chart = createChart(chartContainerRef.current, {\n\t\t\t\tlayout: {\n\t\t\t\t\tbackground: { type: ColorType.Solid, color: backgroundColor },\n\t\t\t\t\ttextColor,\n\t\t\t\t},\n\t\t\t\twidth: chartContainerRef.current.clientWidth,\n\t\t\t\theight: 300,\n\t\t\t});\n\t\t\tchart.timeScale().fitContent();\n\n\t\t\tconst newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });\n\t\t\tnewSeries.setData(data);\n\n\t\t\twindow.addEventListener('resize', handleResize);\n\n\t\t\treturn () => {\n\t\t\t\twindow.removeEventListener('resize', handleResize);\n\n\t\t\t\tchart.remove();\n\t\t\t};\n\t\t},\n\t\t[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]\n\t);\n\n\treturn (\n\t\t<div\n\t\t\tref={chartContainerRef}\n\t\t/>\n\t);\n};\n\nconst initialData = [\n\t{ time: '2018-12-22', value: 32.51 },\n\t{ time: '2018-12-23', value: 31.11 },\n\t{ time: '2018-12-24', value: 27.02 },\n\t{ time: '2018-12-25', value: 27.32 },\n\t{ time: '2018-12-26', value: 25.17 },\n\t{ time: '2018-12-27', value: 28.89 },\n\t{ time: '2018-12-28', value: 25.46 },\n\t{ time: '2018-12-29', value: 23.92 },\n\t{ time: '2018-12-30', value: 22.68 },\n\t{ time: '2018-12-31', value: 22.67 },\n];\n\nexport function App(props) {\n\treturn (\n\t\t<ChartComponent {...props} data={initialData}></ChartComponent>\n\t);\n}\n"),(0,o.kt)("p",null,"and you'll have a reusable component that could then be enhanced, tweaked to meet your needs, adding properties and even functionalities."),(0,o.kt)("p",null,"If you've successfully followed all the steps you should see something similar to"),(0,o.kt)("div",{className:d.Z.ChartContainer},(0,o.kt)(i.Z,{ChartComponent:m,mdxType:"ThemedChart"})))}g.isMDXComponent=!0},3296:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7294),r=n(1736),o=n(1262),i=n(650);const l="iframe_R_Fr";const s=t=>{const{script:e}=t,{version:r}=(0,i.E6)(),o=function(t){return'\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t'+t+"\n\t\t\t};\n\t\t<\/script>\n\t"}(e),s=a.useRef(null);return a.useEffect((()=>{const t=s.current,e=null==t?void 0:t.contentWindow,a=null==t?void 0:t.contentDocument;if(null===t||!e||!a)return;const o=()=>{(function(t){switch(t){case"current":return n.e(9027).then(n.bind(n,9027));case"3.8":return n.e(193).then(n.bind(n,193))}})(r).then((t=>{const n=t.createChart;Object.assign(e,t),e.createChart=(t,a)=>{const r=n(t,a);return e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();r.resize(e.width,e.height)}),!0),r},null==e.run||e.run()})).catch((t=>{console.error(t)}))};if(void 0!==e.run)o();else{const e=()=>{o(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[o]),a.createElement("iframe",{key:e,ref:s,srcDoc:o,className:l})};var c=n(3864);const p=Object.keys(c.l.DARK);const m=t=>{const{chart:e,replaceThemeConstants:n,...m}=t;let{children:d}=t;const{isDarkTheme:h}=(0,i.If)();return n&&"string"==typeof d&&(d=function(t,e){const n=e?c.l.DARK:c.l.LIGHT;let a=t;for(const r of p)a=a.replace(new RegExp(r,"g"),"'"+n[r]+"'");return a}(d,h)),e?a.createElement(a.Fragment,null,a.createElement(r.Z,m,d),a.createElement(o.Z,{fallback:a.createElement("div",{className:l},"\xa0")},(()=>a.createElement(s,{script:d})))):a.createElement(r.Z,m,d)}},6383:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(650),r=n(7294),o=n(3864);function i(t){const e=t?"DARK":"LIGHT";return{backgroundColor:o.l[e].CHART_BACKGROUND_COLOR,lineColor:o.l[e].LINE_LINE_COLOR,textColor:o.l[e].CHART_TEXT_COLOR,areaTopColor:o.l[e].AREA_TOP_COLOR,areaBottomColor:o.l[e].AREA_BOTTOM_COLOR}}function l(t){const{ChartComponent:e}=t,n=function(){const{isDarkTheme:t}=(0,a.If)(),[e,n]=(0,r.useState)(i(t));return(0,r.useEffect)((()=>{n(i(t))}),[t]),e}();return r.createElement(e,{colors:n})}},3864:(t,e,n)=>{n.d(e,{l:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},5804:(t,e,n)=>{n.d(e,{Z:()=>a});const a={ChartContainer:"ChartContainer_Hwvl"}}}]);