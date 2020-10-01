(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{228:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return b}));var r=t(2),n=t(7),i=(t(0),t(236)),l={id:"fair-cluster",title:"Hydra on the FAIR cluster"},c={unversionedId:"fb/fair-cluster",id:"version-1.0/fb/fair-cluster",isDocsHomePage:!1,title:"Hydra on the FAIR cluster",description:"Hydra 1.0rc is available on FAIR Cluster. The recommended way for installation is via meta package hydra-fair-plugin.",source:"@site/versioned_docs/version-1.0/fb/fair-cluster.md",slug:"/fb/fair-cluster",permalink:"/docs/fb/fair-cluster",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/fb/fair-cluster.md",version:"1.0",lastUpdatedBy:"Espen Haugsdal",lastUpdatedAt:1601572065},o=[{value:"Hydra FAIR Plugins",id:"hydra-fair-plugins",children:[{value:"Installation",id:"installation",children:[]},{value:"Clean Install",id:"clean-install",children:[]},{value:"Clean Install",id:"clean-install-1",children:[]},{value:"Upgrade from stable",id:"upgrade-from-stable",children:[]},{value:"Usage",id:"usage",children:[]}]}],s={rightToc:o};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra 1.0rc is available on FAIR Cluster. The recommended way for installation is via meta package ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fairinternal/hydra-fair-plugins"}),"hydra-fair-plugin"),"."),Object(i.b)("h2",{id:"hydra-fair-plugins"},"Hydra FAIR Plugins"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"It brings the correct Hydra dependency and has been tested on the FAIR Cluster."),Object(i.b)("li",{parentName:"ol"},"It provides FAIR Cluster specific defaults overrides (for example, ",Object(i.b)("inlineCode",{parentName:"li"},"hydra.sweep.dir")," is set to be ",Object(i.b)("inlineCode",{parentName:"li"},"/checkpoint/${env:USER}/outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}"),")"),Object(i.b)("li",{parentName:"ol"},"It provides a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/fairinternal/fairtask"}),"fairtask")," launcher plugin."),Object(i.b)("li",{parentName:"ol"},"It installs ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/submitit"}),"Submitit")," launcher plugin by default.")),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("details",null,Object(i.b)("summary",null,"0.3.1 (stable), compatible with Hydra 0.11"),Object(i.b)("h3",{id:"clean-install"},"Clean Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-fair-plugins\n")),Object(i.b)("p",null,"The dependency installed looks like"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip freeze | grep hydra\nhydra-core==0.11.3\nhydra-fair-cluster==0.1.4\nhydra-fair-plugins==0.3.1\nhydra-fairtask==0.1.8\nhydra-submitit==0.2.0\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"1.0 (Release candidate), compatible with Hydra 1.0rc"),Object(i.b)("p",null,"With ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),Object(i.b)("inlineCode",{parentName:"a"},"Submitit"))," open sourced, the corresponding plugin has been moved ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher"}),"here"),". Read this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/submitit_launcher"}),"doc")," on installation/usage info."),Object(i.b)("h3",{id:"clean-install-1"},"Clean Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-fair-plugins  --pre --upgrade --upgrade-strategy=eager\n")),Object(i.b)("h3",{id:"upgrade-from-stable"},"Upgrade from stable"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"# Remove legacy fair internal submitit launcher plugin\npip uninstall hydra-submitit -y\npip install hydra-fair-plugins  --pre --upgrade --upgrade-strategy=eager\n")),Object(i.b)("p",null,"Check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/submitit_launcher"}),"Hydra documentation")," for  more info on ",Object(i.b)("inlineCode",{parentName:"p"},"Submitit")," launcher plugin."),Object(i.b)("p",null,"The depedency looks like "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip freeze | grep hydra\nhydra-core==1.0.0rc1\nhydra-fair-cluster==1.0.0rc1\nhydra-fair-plugins==1.0.0rc1\nhydra-fairtask==1.0.0rc1\nhydra-submitit-launcher==1.0.0rc3\n")),Object(i.b)("p",null,"Please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrades/0.11_to_1.0/config_path_changes"}),"Hydra upgrades")," on what changes are needed for your app for upgrading to Hydra 1.0")),Object(i.b)("details",null,Object(i.b)("summary",null,"Downgrade From 1.0rc to stable"),Object(i.b)("p",null,"Downgrade to stable in case you run into issues and need to be unblocked immediately."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip freeze | grep hydra | xargs pip uninstall -y\npip install hydra-fair-plugins\n"))),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("details",null,Object(i.b)("summary",null,"0.3.1 (stable)"),"Once the plugins are installed, you can launch to the FAIR cluster by appending hydra/launcher=fairtask or hydra/launcher=submitit for example:",Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{})," python my_app.py -m hydra/launcher=submitit db=mysql,postgresql\n# or\n python my_app.py -m hydra/launcher=fairtask db=mysql,postgresql\n")),Object(i.b)("p",null,"Both hydra-submitit and hydra-fairtask are providing sensible defaults for their configuration (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fairinternal/hydra-fair-plugins/blob/master/plugins/hydra-submitit/hydra_plugins/submitit/conf/hydra/launcher/submitit.yaml"}),"Submitit"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fairinternal/hydra-fair-plugins/blob/master/plugins/hydra-fairtask/hydra_plugins/fairtask/conf/hydra/launcher/fairtask.yaml"}),"fairtask"),")"),Object(i.b)("p",null,"You can customize fairtask/submitit behavior much like you can customize anything else, from the command line or by overriding in your config file or composing in alternative launcher configuration.\nYou can view the Hydra config (which includes the config for submitit or fairtask) with this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python my_app.py hydra/launcher=submitit --cfg=hydra\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"1.0 (Release Candidate)"),Object(i.b)("p",null,"For 1.0, ",Object(i.b)("inlineCode",{parentName:"p"},"fairtask")," usage remains the same. To use ",Object(i.b)("inlineCode",{parentName:"p"},"Submitit"),", the command changes to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"python my_app.py -m hydra/launcher=submitit_slurm db=mysql,postgresql\n")),Object(i.b)("p",null,"More info on ",Object(i.b)("inlineCode",{parentName:"p"},"Submitit")," launcher can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hydra.cc/docs/plugins/submitit_launcher"}),"here"))))}b.isMDXComponent=!0},236:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),b=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=b(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?n.a.createElement(m,c(c({ref:a},s),{},{components:t})):n.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);