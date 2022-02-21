"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[6424],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],a={id:"provisioning",title:"Agent Provisioning",sidebar_label:"Provisioning",sidebar_position:1,slug:"/design/provisioning",partners:["rwth"]},l=void 0,c={unversionedId:"design/provisioning",id:"design/provisioning",title:"Agent Provisioning",description:"Facts",source:"@site/docs/design/provisioning.md",sourceDirName:"design",slug:"/design/provisioning",permalink:"/docs/design/provisioning",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/design/provisioning.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"provisioning",title:"Agent Provisioning",sidebar_label:"Provisioning",sidebar_position:1,slug:"/design/provisioning",partners:["rwth"]},sidebar:"docs",previous:{title:"\u2728 Getting started",permalink:"/docs/getting-started/"},next:{title:"Overlay Network",permalink:"/docs/design/ip-overlay"}},u=[{value:"Facts",id:"facts",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Employed technologies",id:"employed-technologies",children:[],level:2},{value:"Architecture",id:"architecture",children:[{value:"User Roles",id:"user-roles",children:[],level:3},{value:"Provisioning Process",id:"provisioning-process",children:[{value:"Generation of a new system image",id:"generation-of-a-new-system-image",children:[],level:4},{value:"Configuration",id:"configuration",children:[],level:4},{value:"First boot",id:"first-boot",children:[],level:4},{value:"Subsequent boots",id:"subsequent-boots",children:[],level:4}],level:3}],level:2},{value:"Implementation details",id:"implementation-details",children:[{value:"Security considerations",id:"security-considerations",children:[],level:3}],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"facts"},"Facts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Git Repo:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/erigrid2/riasc-provisioning"},"https://github.com/erigrid2/riasc-provisioning")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"State:")," implementation finished")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The provisioning component is responsible for quickly adding new nodes to the RIasC cluster with minimal effort.\nIt does so by generating pre-configured system OS images (e.g. Raspberry Pi SD card) for various environments."),(0,o.kt)("p",null,"New nodes can be automatically provisioning by booting them with such an image.\nUsers only provide minimal configuration such as the IP addresses, hostnames or access tokens for registration to a RIasC cluster."),(0,o.kt)("h2",{id:"employed-technologies"},"Employed technologies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/"},"RaspberryPi OS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://libguestfs.org/guestfish.1.html"},"Guestfish")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ansible.com/"},"Ansible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://k3s.io"},"K3s"))),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The following figure shows the flow for generating and booting an pre-generated SD card image for Raspberry Pis."),(0,o.kt)("figure",{align:"center"},(0,o.kt)("img",{alt:"Provisioning flow",src:"/img/provisioning.png",width:"90%"}),(0,o.kt)("figcaption",null,"Provisioning flow.")),(0,o.kt)("h3",{id:"user-roles"},"User Roles"),(0,o.kt)("p",null,"We distinguish two groups of users or ",(0,o.kt)("em",{parentName:"p"},"roles")," within a RIasC cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cluster operator:")," The cluster operator oversees the administrative tasks of setting up a RIasC cluster and its central components (K3S server, Ansible Repo, Access Control)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lab provider:")," The lab provider participates in the RIasC cluster by providing one or more agent nodes which join the cluster.")),(0,o.kt)("h3",{id:"provisioning-process"},"Provisioning Process"),(0,o.kt)("p",null,"There are three steps required for provisioning new nodes:"),(0,o.kt)("h4",{id:"generation-of-a-new-system-image"},"Generation of a new system image"),(0,o.kt)("p",null,"This step is usually only performed once by the cluster operator.\nIt generates the new system image by embedding a special script named ",(0,o.kt)("inlineCode",{parentName:"p"},"riasc-update.sh")," into the image which gets executed during every system boot."),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Once the system image has been generated by the cluster operator and distributed to the lab providers, the lab providers need to customize the image by providing a few custom configuration settings like the agent hostname, IP address or access tokens required for joining the cluster."),(0,o.kt)("p",null,"These settings are provided in a ",(0,o.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," configuration file.\nIn the case of a Raspberry Pi agent, this configuration resides on the FAT32-formatted ",(0,o.kt)("inlineCode",{parentName:"p"},"boot")," partition and is therefore easily editable by Windows users as well."),(0,o.kt)("h4",{id:"first-boot"},"First boot"),(0,o.kt)("p",null,"Once the configuration file has been edited by the user, the new agent can be booted for the first time by the lab provider.\nDuring this initial and all subsequent boots of the node a shell script named ",(0,o.kt)("inlineCode",{parentName:"p"},"riasc-update.sh")," is executed.\nThis shell script performs some initial checks, install some required software packages and performs some first basic configuration tasks like the setup of the system hostname."),(0,o.kt)("p",null,"All further configuration is then handled by Ansible.\nAnsible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code.\nIt runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows.\nIt includes its own declarative language to describe system configuration."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"riasc-update.sh")," script uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"ansible-pull")," command for fetch the system configuration from a remote Git repository.\nOnce fetched, the system configuration is applied and the new agent node is joined the K3s Kubernetes cluster."),(0,o.kt)("h4",{id:"subsequent-boots"},"Subsequent boots"),(0,o.kt)("p",null,"Once the initial boot has been completed, the provisioning process is completed.\nThe cluster operator can now apply further updates to the agend by updating the Ansible repository and triggering a reboot of the node.\nSuch a reboot will cause the ",(0,o.kt)("inlineCode",{parentName:"p"},"riasc-update.sh")," script to be executed again and reapply the now possibly updated configuration."),(0,o.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,o.kt)("h3",{id:"security-considerations"},"Security considerations"),(0,o.kt)("p",null,"Having embedded devices in a securly guardded lab-environment automatically executing code fetched from a remote repository is undoubltly a security risc which needs to be mitigated.\nHence, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ansible-pull")," command checks the fetch Git commit for an embedded PGP signature which is verified against a static whitelist of PGP keys of the cluster operator."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/setup/agent"},"Agent setup"))))}p.isMDXComponent=!0}}]);