"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[8405],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"time-sync",title:"Time Synchronization",sidebar_label:"Time Synchronization",sidebar_position:4,slug:"/design/time-sync",partners:["uos","rwth"]},s=void 0,c={unversionedId:"design/time-sync",id:"design/time-sync",title:"Time Synchronization",description:"Facts",source:"@site/docs/design/time-sync.md",sourceDirName:"design",slug:"/design/time-sync",permalink:"/docs/design/time-sync",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/design/time-sync.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"time-sync",title:"Time Synchronization",sidebar_label:"Time Synchronization",sidebar_position:4,slug:"/design/time-sync",partners:["uos","rwth"]},sidebar:"docs",previous:{title:"Network Emulation",permalink:"/docs/design/network-emulation"},next:{title:"Network Monitoring",permalink:"/docs/design/network-monitoring"}},p=[{value:"Facts",id:"facts",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Employed technologies",id:"employed-technologies",children:[],level:2},{value:"Applications",id:"applications",children:[],level:2},{value:"Functional Requirements",id:"functional-requirements",children:[],level:2},{value:"Architecture",id:"architecture",children:[{value:"Daemonset",id:"daemonset",children:[],level:3},{value:"Linux kernel-level PPS device",id:"linux-kernel-level-pps-device",children:[],level:3},{value:"Status reporting",id:"status-reporting",children:[],level:3},{value:"Synchronization sources",id:"synchronization-sources",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"facts"},"Facts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Helm Chart:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ERIGrid2/charts/tree/master/charts/time-sync"},"https://github.com/ERIGrid2/charts/tree/master/charts/time-sync")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"State:")," under development")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide describes the steps to setup time-synchronization for embbeded single-board computers (SBCs) such as a Raspberry Pi.\nThe time-synchronization relies on a comodity GPS module providing a pulse-per-second (PPS) output to a GPIO pin of the SBC."),(0,o.kt)("h2",{id:"employed-technologies"},"Employed technologies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrony.tuxfamily.org/"},"Chrony")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.berlios.de/software/gpsd/"},"GPSd")),(0,o.kt)("li",{parentName:"ul"},"Kubernetes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#nodecondition-v1-core"},"Node status-condition"))))),(0,o.kt)("h2",{id:"applications"},"Applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time-delay compensation"),(0,o.kt)("li",{parentName:"ul"},"Logging/timestamping/tracing of interface signals"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/design/network-monitoring"},"Network monitoring"))),(0,o.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microsecond accuracy"),(0,o.kt)("li",{parentName:"ul"},"Auto-configuration of sychronization source"),(0,o.kt)("li",{parentName:"ul"},"Support for multiple synchronization sources"),(0,o.kt)("li",{parentName:"ul"},"Reporting of sychronization status")),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("h3",{id:"daemonset"},"Daemonset"),(0,o.kt)("p",null,"Time-synchronization is implemented by a cluster-wide ",(0,o.kt)("em",{parentName:"p"},"Daemonset")," which spawns a single ",(0,o.kt)("em",{parentName:"p"},"Pod")," on each cluster node.\nThese ",(0,o.kt)("em",{parentName:"p"},"Pods")," execute three containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chronyd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chronyd-monitor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gpsd"))),(0,o.kt)("p",null,"All containers in the ",(0,o.kt)("em",{parentName:"p"},"Pod")," communicate via sockets which are placed into a shared emptyDir volume.\nThere are three sockets created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gpsd")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"chronyd")," coarse date-time: ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/chrony.ttyAMA0.sock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gpsd")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"chronyd")," precise PPS timing: ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/chrony.pps0.sock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chronyd-monitor")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"chronyd")," status reporting: ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/chrony"))),(0,o.kt)("p",null,"All sockets are created by chronyd and subsequentially opened by gpsd and the chronyd-monitor script.\nThe first two sockets are used to provide rough date-time as well as PPS timing information from gpsd to chronyd.\nThe last socket is usually used by the chronyc command line tool to interact with the chronyd daemon.\nHere the socket is also used by the chronyd-monitor script to periodically check the sync status and publish it to the Kubernetes api-server."),(0,o.kt)("p",null,"In addition to the shared sockets, some physical devices are mounted from the host into the containers using a hostPath volume.\nThe gpsd container gets both the serial device ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/ttyAMA0")," as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/pps0")," device mounted.\nThe chronyd container only gets the PPS device ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/pps0")," mounted."),(0,o.kt)("h3",{id:"linux-kernel-level-pps-device"},"Linux kernel-level PPS device"),(0,o.kt)("p",null,"Both gpsd and chronyd use the kernel-based PPS device order for the PPS ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/pps0")," device to be created a special devicetree overlay needs to be loaded during boot-up."),(0,o.kt)("h3",{id:"status-reporting"},"Status reporting"),(0,o.kt)("p",null,"As mentioned above a dedicated ",(0,o.kt)("inlineCode",{parentName:"p"},"chronyd-monitor")," container in the time-sync ",(0,o.kt)("em",{parentName:"p"},"Pods")," is used to periodically publish the current synchronization state from chronyd in the form of a ",(0,o.kt)("em",{parentName:"p"},"Node status-condition")," to the Kubernetes api-server."),(0,o.kt)("p",null,"This container runs a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ERIGrid2/charts/blob/master/images/time-sync/chrony-monitor.py"},"Python script")," which periodically calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"chronyc tracking")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chronyc sources")," commnands to query the current synchronization status.\nAfterwards, the script will publish this status as ",(0,o.kt)("em",{parentName:"p"},"Node status-condition")," to the Kubernetes api-server as well include more details a annotations to the ",(0,o.kt)("em",{parentName:"p"},"Node")," resource."),(0,o.kt)("h3",{id:"synchronization-sources"},"Synchronization sources"),(0,o.kt)("p",null,"In order of their priority:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pulse-per-second_signal"},"Pulse-per-second signal (PPS)"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Kernel-based PPS (kPPS)"),(0,o.kt)("li",{parentName:"ol"},"Userspace PPS"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Precision_Time_Protocol"},"Precision Time Protocol (PTP)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},"Network Time Protocol (NTP)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Real-time_clock"},"Real-time Clock (RTC)"))),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Local testing"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Two Raspberry Pis"),(0,o.kt)("li",{parentName:"ul"},"Independent synchronization sources"),(0,o.kt)("li",{parentName:"ul"},"Equal or different synchronization types"),(0,o.kt)("li",{parentName:"ul"},"Produce periodic rising edge via GPIO"),(0,o.kt)("li",{parentName:"ul"},"Use oscilloscope to measure time offset between edges"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reporting synchronization status between RIs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Retrieve sync status from Chrony")))),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrony.tuxfamily.org/documentation.html"},"Chrony Documentationd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gpsd.gitlab.io/gpsd/gpsd-time-service-howto.html#_feeding_chrony_from_gpsd"},"GPSD Time Service HOWTO")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/latest/driver-api/pps.html"},"Linux Kernel Documentation: PPS - Pulse Per Second"))))}u.isMDXComponent=!0}}]);