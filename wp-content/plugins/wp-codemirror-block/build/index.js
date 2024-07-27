(()=>{"use strict";var e,t={304:()=>{const e=window.wp.i18n,t=window.wp.blocks,m=window.React,a=window.wp.blockEditor,i=window.wp.element,l=window.wp.components,o=window.wp.keycodes,{CodeMirror:n}=window;function s(e){const{options:a,showPanel:l,isSelected:s,insertBlocksAfter:r}=e,{mime:x,mode:c,theme:d,lineNumbers:p,firstLineNumber:f,lineWrapping:u,styleActiveLine:g}=a,h=(0,i.useRef)(l),y=(0,i.useRef)(null),b=(0,i.useRef)(null),v=(0,i.useRef)(null),[N,k]=(0,i.useState)(!1);(0,i.useEffect)((()=>{b.current=n.fromTextArea(y.current,e.options);let t=b.current.getWrapperElement();!0===l&&t.classList.add("has-panel"),b.current.setOption("mode",x),n.autoLoadMode(b.current,c),n.autoLoadTheme(b.current,d),b.current.on("blur",C),b.current.on("change",E),b.current.on("cursorActivity",w),b.current.on("focus",S),b.current.on("keyHandled",L),e.editorRef&&(e.editorRef(b.current),j())}),[]),(0,i.useEffect)((()=>{!0===s&&!1===l&&(b.current.hasFocus()||b.current.focus())}),[s,l]),(0,i.useEffect)((()=>{b.current.setOption("theme",d),n.autoLoadTheme(b.current,d)}),[d]),(0,i.useEffect)((()=>{b.current.setOption("mode",x),n.autoLoadMode(b.current,c)}),[c]),(0,i.useEffect)((()=>{b.current.setOption("lineNumbers",p)}),[p]),(0,i.useEffect)((()=>{b.current.setOption("lineWrapping",u)}),[u]),(0,i.useEffect)((()=>{b.current.setOption("styleActiveLine",g)}),[g]),(0,i.useEffect)((()=>{b.current.setOption("firstLineNumber",f)}),[f]),(0,i.useEffect)((()=>{let e=b.current.getWrapperElement();h.current=l,!0===l?e.classList.add("has-panel"):e.classList.remove("has-panel")}),[l]);const S=()=>{e.onFocus&&e.onFocus()},C=t=>{e.onChange&&e.onChange(t.getValue()),k(!0)},w=e=>{v.current=e.getCursor()},L=(e,m,a)=>{const i=a.path||a.composedPath();if(console.log("eventPath",i),a.keyCode===o.UP||a.keyCode===o.DOWN){const m=(e,t)=>e.line===t.line;if(v.current&&m(e.getCursor(),v.current)){if(a.keyCode===o.UP)if(!0===h.current)i[3].querySelector(".language").focus();else{let e=document.querySelector(".is-root-container").querySelectorAll('[role="document"]');if(!e.length)return;e.forEach(((t,m)=>{if(t.id!==i[4].id);else{let t=e[m-1];t?t.focus():document.querySelector(".wp-block-post-title").focus()}}))}if(a.keyCode===o.DOWN){let e=document.querySelector(".is-root-container").querySelectorAll('[role="document"]');if(!e.length)return;e.forEach(((m,a)=>{if(m.id!==i[4].id);else{let m=e[a+1];m?m.focus():r((0,t.createBlock)((0,t.getDefaultBlockName)()))}}))}}else v.current=e.getCursor()}a.ctrlKey&&65===a.keyCode&&N&&(k(!1),a.stopImmediatePropagation())},j=()=>{console.log("update focus"),e.focus&&!b.current.hasFocus()&&window.requestAnimationFrame((()=>{b.current.focus()})),!e.focus&&b.current.hasFocus()&&document.activeElement.blur()},E=(t,m)=>{if(e.onChange&&"setValue"!==m.origin){let a=t.getValue();e.onChange(a,m)}if(e.onChange&&"paste"===m.origin){let a=t.getValue();a=String(a).replace(/“/g,'"').replace(/”/g,'"').replace(/‘/g,"'").replace(/’/g,"'"),e.onChange(a,m)}};return(0,m.createElement)("textarea",{ref:y,autoComplete:"off",defaultValue:e.value,placeholder:e.placeholder})}const{panelOptions:r,defaults:x,themes:c}=window.wpcm,d=JSON.parse('{"UU":"codemirror-blocks/code-block"}'),p=[{attributes:{panel:{type:"boolean",default:!0},fileName:{type:"string",default:""},content:{type:"array",source:"children",selector:"pre"},alignment:{type:"string"},mode:{type:"string",default:"htmlmixed"},mime:{type:"string",default:"text/html"},lineNumbers:{type:"boolean",default:!1},firstLineNumber:{type:"number",default:1},lineWrapping:{type:"boolean",default:!1},readOnly:{type:"boolean",default:!0},disableCopy:{type:"boolean",default:!1},theme:{type:"string",default:"material"}},save({attributes:e}){const{content:t,mode:i,mime:l,lineNumbers:o,lineWrapping:n,readOnly:s,disableCopy:r,theme:x}=e;let c="CodeMirror cm-s-"+x,d={mode:i,mime:l,theme:x,lineNumbers:o,lineWrapping:n,readOnly:1==s&&(1!=r||"nocursor")};return(0,m.createElement)("div",{className:"code-block"},(0,m.createElement)(a.RichText.Content,{className:c,"data-setting":JSON.stringify(d),tagName:"pre",value:(p=t,String(p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))}));var p}}],{panelOptions:f,defaults:u}=window.wpcm;(0,t.registerBlockType)(d.UU,{attributes:{showPanel:{type:"boolean",default:f?.showPanel||!1},showLanguageLabel:{type:"boolean",default:f?.showLanguageLabel||!1},languageLabel:{type:"string",default:!1===f?.languageLabel?"no":f?.languageLabel},fileName:{type:"string",default:""},content:{type:"array",source:"children",selector:"pre"},mode:{type:"string",default:""},mime:{type:"string",default:""},lineNumbers:{type:"boolean",default:u?.lineNumbers||!1},firstLineNumber:{type:"string",default:Math.abs(1)},lineWrapping:{type:"boolean",default:u?.lineWrapping||!1},readOnly:{type:"boolean",default:u?.readOnly||!1},styleActiveLine:{type:"boolean",default:u?.styleActiveLine||!1},disableCopy:{type:"boolean",default:!1},theme:{type:"string",default:u?.theme||"material"}},transforms:{from:[{type:"raw",priority:4,isMatch:e=>"PRE"===e.nodeName&&1===e.children.length&&"CODE"===e.firstChild.nodeName,transform:e=>(0,t.createBlock)("codemirror-blocks/code-block",{content:e.textContent})},{type:"block",blocks:["core/code","core/preformatted","core/paragraph"],transform:({content:e})=>(0,t.createBlock)("codemirror-blocks/code-block",{content:e})}],to:[{type:"block",blocks:["core/code"],transform:({content:e})=>(0,t.createBlock)("core/code",{content:e})},{type:"block",blocks:["core/preformatted"],transform:({content:e})=>(0,t.createBlock)("core/preformatted",{content:e})}]},edit:function(t){const{attributes:o,setAttributes:n,isSelected:d,insertBlocksAfter:p}=t,{showPanel:f,languageLabel:u,fileName:g,mime:h,mode:y,theme:b,lineNumbers:v,firstLineNumber:N,lineWrapping:k,readOnly:S,styleActiveLine:C,disableCopy:w,content:L}=o,[j,E]=(0,i.useState)([]),[T,q]=(0,i.useState)([]),[P,O]=(0,i.useState)([]),[M,_]=(0,i.useState)([]),[D,B]=(0,i.useState)("");(0,i.useEffect)((()=>{let t=[];for(let m=0;m<c.length;m++)0==m&&t.push({value:x.theme,label:"Default Theme"}),c[m].value!=x.theme?t.push({value:c[m].value,label:(0,e.__)(c[m].label)}):t[0]={value:x.theme,label:c[m].label+" (Default Theme)"};E(t)}),[c]),(0,i.useEffect)((()=>{let t=[],m=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"],fileName:"filename"},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"],fileName:"file"},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"],fileName:"file"},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"],fileName:"index"},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"],fileName:"clojureScript"},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"],fileName:"closureStyle"},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"],fileName:"script"},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"],fileName:"style"},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"],fileName:"cassandra"},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django",ext:["py"],fileName:"manage"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i,ext:["md"],fileName:"readme"},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"],fileName:"index"},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"],fileName:"index"},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"],fileName:"index"},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"],fileName:"class"},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"],fileName:"index"},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"],fileName:"script"},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"],fileName:"data"},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"],fileName:"data"},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"],dependency:["xml","javascript"],fileName:"app"},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"],fileName:"kotlin"},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"],fileName:"style"},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"],fileName:"readme"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i,ext:["conf"],fileName:"nginx"},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"],fileName:"object"},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"],fileName:"octave"},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"],fileName:"perl"},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"],fileName:"index"},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"],fileName:"file"},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"],fileName:"procedure"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"],fileName:"shell"},{name:"Properties files (php.ini)",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/,fileName:"index"},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"],fileName:"script"},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"],fileName:"index"},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"],fileName:"filename"},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"],fileName:"style"},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/,fileName:"file"},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"],fileName:"smalltalk"},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"],fileName:"query"},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"],fileName:"file"},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"],fileName:"script"},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"],fileName:"script"},{name:"Twig",mime:"text/x-twig",mode:"twig",ext:["php"],fileName:"template"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"],fileName:"script"},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"],fileName:"component"},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}];for(var a=0;a<m.length;a++){var i=m[a];if(void 0!==i.mime&&t.push({value:i.mime,label:(0,e.__)(i.name)}),void 0!==i.mimes)for(var l=0;l<i.mimes.length;l++)0==l?t.push({value:i.mimes[l],label:(0,e.__)(i.name)}):t.push({value:i.mimes[l],label:(0,e.__)(i.name+" ("+i.mimes[l]+")")})}q(t),O(t)}),[]),(0,i.useEffect)((()=>{if(!h){let e=x.mime;n({mime:e}),n({mode:F(e).mode}),n({fileName:R(e,u)})}}),[h]),(0,i.useEffect)((()=>{if("no"==u)n({fileName:""}),B(""),_([]);else{let e=[],t="",m=h||x.mime,a=F(m);e=["language",a.name.toLowerCase(),a.mime?a.mime.replace(/\w+\/\w+[-.]/g,""):a.mimes[0].replace(/\w+\/\w+[-.]/g,""),a.ext?a.ext[0]:""],"language"==u&&(t=a.name),"file"==u&&(t=g),_(e),B(t)}}),[h,u]);const F=e=>{let t=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"],fileName:"filename"},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"],fileName:"file"},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"],fileName:"file"},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"],fileName:"index"},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"],fileName:"clojureScript"},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"],fileName:"closureStyle"},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"],fileName:"script"},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"],fileName:"style"},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"],fileName:"cassandra"},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django",ext:["py"],fileName:"manage"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i,ext:["md"],fileName:"readme"},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"],fileName:"index"},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"],fileName:"index"},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"],fileName:"index"},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"],fileName:"class"},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"],fileName:"index"},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"],fileName:"script"},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"],fileName:"data"},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"],fileName:"data"},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"],dependency:["xml","javascript"],fileName:"app"},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"],fileName:"kotlin"},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"],fileName:"style"},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"],fileName:"readme"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i,ext:["conf"],fileName:"nginx"},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"],fileName:"object"},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"],fileName:"octave"},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"],fileName:"perl"},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"],fileName:"index"},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"],fileName:"file"},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"],fileName:"procedure"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"],fileName:"shell"},{name:"Properties files (php.ini)",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/,fileName:"index"},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"],fileName:"script"},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"],fileName:"index"},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"],fileName:"filename"},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"],fileName:"style"},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/,fileName:"file"},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"],fileName:"smalltalk"},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"],fileName:"query"},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"],fileName:"file"},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"],fileName:"script"},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"],fileName:"script"},{name:"Twig",mime:"text/x-twig",mode:"twig",ext:["php"],fileName:"template"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"],fileName:"script"},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"],fileName:"component"},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}];e=e.toLowerCase();for(var m=0;m<t.length;m++){var a=t[m];if(a.mime==e)return a;if(a.mimes)for(var i=0;i<a.mimes.length;i++)if(a.mimes[i]==e)return a}},A=e=>e.join(" "),R=(e,t)=>{let m=F(e);if("file"==t){let e=m.fileName?m.fileName:m.mode,t=m.ext?m.ext[0]:"";return t&&e==t?"filename."+t:t?e+"."+t:m.name}return"language"==t?m.name:""},W=e=>{alert(e+"\n\nThis button will work only on front end!")},Q={mime:h,mode:y,lineNumbers:v,firstLineNumber:Math.abs(N),lineWrapping:k,theme:b,styleActiveLine:C,scrollbarStyle:"simple",smartIndent:!0,electricChars:!0};let V=!1;[].includes(y)&&(V=!!window.wpcm.panelOptions.runButton);let z=!!window.wpcm.panelOptions.fullScreenButton,G=!!window.wpcm.panelOptions.copyButton&&!w;return(0,m.createElement)("div",{...(0,a.useBlockProps)()},(0,m.createElement)(i.Fragment,null,(0,m.createElement)(a.InspectorControls,null,(0,m.createElement)(l.PanelBody,{initialOpen:!0,title:(0,e.__)("CodeMirror Panel Settings")},(0,m.createElement)(l.ToggleControl,{label:(0,e.__)("Show Panel"),checked:f,onChange:()=>n({showPanel:!f})}),f&&(0,m.createElement)(l.SelectControl,{label:(0,e.__)("Language Label"),value:u,help:(0,e.__)("Language label text. you can use it as file name also."),options:(()=>{let t=[{label:"No Label",value:"no"},{label:"Language Name",value:"language"},{label:"File Name",value:"file"}],m=!1===r.languageLabel?"no":r.languageLabel,a=[];for(let i=0;i<t.length;i++)0==i&&a.push({label:"Default Option",value:m}),t[i].value!=m?a.push({value:t[i].value,label:(0,e.__)(t[i].label)}):a[0]={value:m,label:t[i].label+" (Default)"};return a})(),onChange:e=>{n({languageLabel:e}),n({fileName:R(h,e)})}})),(0,m.createElement)(l.PanelBody,{title:(0,e.__)("CodeMirror Settings")},(0,m.createElement)(l.ComboboxControl,{label:(0,e.__)("Language / Mode"),value:h,onChange:e=>{n({mime:e});let t=F(e);n({mode:t.mode}),n({fileName:R(e,u)})},options:P,allowReset:!1,onFilterValueChange:e=>O(T.filter((t=>t.label.toLowerCase().startsWith(e.toLowerCase()))))}),(0,m.createElement)(l.SelectControl,{label:(0,e.__)("Theme"),value:b,options:j,onChange:e=>n({theme:e})}),(0,m.createElement)("h2",null,"Editor Options"),(0,m.createElement)(l.ToggleControl,{label:(0,e.__)("Editable on Frontend?"),checked:!S,onChange:e=>{!0===e&&n({disableCopy:!1}),n({readOnly:!e})}}),S&&(0,m.createElement)(l.ToggleControl,{label:(0,e.__)("Disable Copy on Frontend?"),checked:w,onChange:()=>n({disableCopy:!w})})),(0,m.createElement)(l.PanelBody,{initialOpen:!1,title:(0,e.__)("Line Settings")},(0,m.createElement)(l.ToggleControl,{label:(0,e.__)("Show Line Numbers?"),checked:v,onChange:()=>n({lineNumbers:!v})}),v&&(0,m.createElement)(l.TextControl,{label:(0,e.__)("First Line Number"),type:"number",value:N,onChange:e=>{n({firstLineNumber:e=e&&e<1?1:e})},onBlur:()=>{N<1&&n({firstLineNumber:1})},min:"1"}),(0,m.createElement)(l.ToggleControl,{label:(0,e.__)("Highlight Active Line?"),checked:C,onChange:()=>n({styleActiveLine:!C})}),(0,m.createElement)(l.ToggleControl,{label:(0,e.__)("Warp Long Line?"),checked:k,onChange:()=>n({lineWrapping:!k})}))),(0,m.createElement)("div",{className:"codeMirror-editor"},(0,m.createElement)("div",{className:A(["CodeMirror CodeMirror-panel","cm-s-"+b])},(0,m.createElement)("div",{className:A(["info-panel",f?"":"hide-panel"])},(0,m.createElement)(a.RichText,{tagName:"span",className:A(M),value:D,onChange:e=>n({fileName:e}),autoFocus:!1}),(0,m.createElement)("div",{className:"control-panel"},V&&(0,m.createElement)("span",{title:"It Execute Code on Front End",onClick:()=>W("It Execute Code on Front End")},(0,m.createElement)("b",{className:"run-code execute-code"})),z&&(0,m.createElement)("span",{title:"To Set Full Screen on Front End",onClick:()=>W("To Set Full Screen on Front End")},(0,m.createElement)("b",{className:"fullscreen maximize"})),G&&(0,m.createElement)("span",{title:"Copy Code on Front End",onClick:()=>W("Copy Code on Front End")},(0,m.createElement)("b",{className:"copy"}))))),(0,m.createElement)(s,{key:"code",placeholder:(0,e.__)("/** Write or Paste Your Code Here \n And Select Code Language Mode, by default (javaScript) Mode is selected"),value:String(L),options:Q,showPanel:f,onChange:e=>n({content:e}),autoFocus:d,isSelected:d,insertBlocksAfter:p}))))},save:function({attributes:e}){const{content:t}=e,i=a.useBlockProps.save({className:"code-block"});return(0,m.createElement)("div",{...i},(0,m.createElement)(a.RichText.Content,{tagName:"pre",value:(l=t,String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))}));var l},deprecated:p})}},m={};function a(e){var i=m[e];if(void 0!==i)return i.exports;var l=m[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,m,i,l)=>{if(!m){var o=1/0;for(x=0;x<e.length;x++){for(var[m,i,l]=e[x],n=!0,s=0;s<m.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](m[s])))?m.splice(s--,1):(n=!1,l<o&&(o=l));if(n){e.splice(x--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var x=e.length;x>0&&e[x-1][2]>l;x--)e[x]=e[x-1];e[x]=[m,i,l]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};a.O.j=t=>0===e[t];var t=(t,m)=>{var i,l,[o,n,s]=m,r=0;if(o.some((t=>0!==e[t]))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(s)var x=s(a)}for(t&&t(m);r<o.length;r++)l=o[r],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(x)},m=globalThis.webpackChunkwp_codemirror_block=globalThis.webpackChunkwp_codemirror_block||[];m.forEach(t.bind(null,0)),m.push=t.bind(null,m.push.bind(m))})();var i=a.O(void 0,[350],(()=>a(304)));i=a.O(i)})();