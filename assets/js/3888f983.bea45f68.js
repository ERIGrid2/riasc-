"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[8654],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"network-emulation",title:"Network emulation (netem) CNI-plugin for Kubernetes",sidebar_label:"Network Emulation",sidebar_position:4,slug:"/design/network-emulation",partners:["vtt","rwth"]},s=void 0,p={unversionedId:"design/network-emulation",id:"design/network-emulation",title:"Network emulation (netem) CNI-plugin for Kubernetes",description:"Facts",source:"@site/docs/design/network-emulation.md",sourceDirName:"design",slug:"/design/network-emulation",permalink:"/docs/design/network-emulation",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/design/network-emulation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"network-emulation",title:"Network emulation (netem) CNI-plugin for Kubernetes",sidebar_label:"Network Emulation",sidebar_position:4,slug:"/design/network-emulation",partners:["vtt","rwth"]},sidebar:"docs",previous:{title:"IP-Gateway/NAT",permalink:"/docs/design/ip-gateway"},next:{title:"Time Synchronization",permalink:"/docs/design/time-sync"}},m={},c=[{value:"Facts",id:"facts",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:3},{value:"Employed technologies",id:"employed-technologies",level:2},{value:"Controllers",id:"controllers",level:2},{value:"Builtin",id:"builtin",level:3},{value:"Flexe (VTT Network Emulator)",id:"flexe-vtt-network-emulator",level:3},{value:"Example <em>TrafficProfile</em> for Flexe controller",id:"example-trafficprofile-for-flexe-controller",level:2},{value:"Example <em>TrafficProfile</em> for Builtin controller",id:"example-trafficprofile-for-builtin-controller",level:2},{value:"Example Pod",id:"example-pod",level:3},{value:"Approach",id:"approach",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Installation",id:"installation",level:3},{value:"Custom Resources",id:"custom-resources",level:3},{value:"Mutating Admission Webhook",id:"mutating-admission-webhook",level:3},{value:"Sidecar Containers",id:"sidecar-containers",level:3},{value:"Flow classification",id:"flow-classification",level:3},{value:"Support for multiple simultaneous <em>TrafficProfiles</em>, Controllers and Interfaces per <em>Pod</em>",id:"support-for-multiple-simultaneous-trafficprofiles-controllers-and-interfaces-per-pod",level:3},{value:"Further reading",id:"further-reading",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"facts"},"Facts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Git Repo:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ERIGrid2/k8s-netem"},"https://github.com/ERIGrid2/k8s-netem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Helm Chart:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ERIGrid2/charts/tree/master/charts/netem"},"https://github.com/ERIGrid2/charts/tree/master/charts/netem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State:")," under testing")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"k8s-netem")," adds support for traffic control in Kubernetes pods."),(0,i.kt)("p",null,"It allows the user to configure one or more traffic profiles to impair network traffic between pods in the cluster and between pods and external networks."),(0,i.kt)("p",null,"The traffic profiles are implemented as a custom resource definitions (CRD) which the user can add and modify in the Kubernetes database using standard tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," or a Kubernetes web-interface."),(0,i.kt)("p",null,"These, ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.podSelector")," or CIDR's to match a set of source and destination pods/networks for which the impairment should be configured.\nIn addition the impairment can be restricted to a set of UDP or TCP port numbers, Ether-types and IP protocols.\n",(0,i.kt)("inlineCode",{parentName:"p"},"k8s-netem")," will continuously watch for new or modified ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," as well as ",(0,i.kt)("em",{parentName:"p"},"Pods")," and update the traffic control configuration appropriately."),(0,i.kt)("p",null,"The traffic profile custom resource is inspired by Kubernetes ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource"},(0,i.kt)("em",{parentName:"a"},"NetworkPolicy")," CR")," and has been extended to accomodate the traffic control parameters as well as additional filters for the Ether-types and IP protocols."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network emulation and rate limiting"),(0,i.kt)("li",{parentName:"ul"},"Support for ingress (WIP) and egress traffic"),(0,i.kt)("li",{parentName:"ul"},"Requires no modification of existing manifests"),(0,i.kt)("li",{parentName:"ul"},"Complex ingress/egress filters inspired by ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Kubernetes' network policies"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Matches cross-pod flows as well as from/to specific external CIDRs"),(0,i.kt)("li",{parentName:"ul"},"Matches UDP/TCP ports"),(0,i.kt)("li",{parentName:"ul"},"Matches Ether-types"),(0,i.kt)("li",{parentName:"ul"},"Matches IP Protocols"))),(0,i.kt)("li",{parentName:"ul"},"Live filter updates based on ",(0,i.kt)("inlineCode",{parentName:"li"},"podSelectors")),(0,i.kt)("li",{parentName:"ul"},"Support for multiple ",(0,i.kt)("em",{parentName:"li"},"TrafficProfiles")," per ",(0,i.kt)("em",{parentName:"li"},"Pod")),(0,i.kt)("li",{parentName:"ul"},"Extensible with additional controller types")),(0,i.kt)("h2",{id:"employed-technologies"},"Employed technologies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/tc.8.html"},"Traffic control")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.linuxfoundation.org/networking/netem"},"Netem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ipset.netfilter.org/"},"IPsets")))),(0,i.kt)("li",{parentName:"ul"},"Kubernetes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Mutating Admission Webhook"))))),(0,i.kt)("h2",{id:"controllers"},"Controllers"),(0,i.kt)("p",null,"Currently ",(0,i.kt)("em",{parentName:"p"},"k8s-netem")," supports two types of controllers:"),(0,i.kt)("h3",{id:"builtin"},"Builtin"),(0,i.kt)("p",null,"The builtin TC controller uses ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.linuxfoundation.org/networking/iproute2"},"iproute2"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"tc")," command to configure Linux's traffic control subsystem by adding queuing disciplines and filters."),(0,i.kt)("h3",{id:"flexe-vtt-network-emulator"},"Flexe (VTT Network Emulator)"),(0,i.kt)("p",null,"The Flexe controller is software developed by ",(0,i.kt)("a",{parentName:"p",href:"https://www.vtt.fi/"},"VTT"),", which is based on Linux ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.linuxfoundation.org/networking/iproute2"},"iproute2"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"tc")," command like builtin TC controller, but has more functionalities added to it. Software have been extended to support have several traffic profiles running from time to time, added REST API for making the qdisc / filter / netem configuration changes, etc."),(0,i.kt)("h2",{id:"example-trafficprofile-for-flexe-controller"},"Example ",(0,i.kt)("em",{parentName:"h2"},"TrafficProfile")," for Flexe controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: k8s-netem.riasc.eu/v1\nkind: TrafficProfile\nmetadata:\n  name: profile-delay-jitter-flexe\nspec:\n  podSelector:\n    matchLabels:\n      traffic-profile: profile-delay-jitter-flexe\n\n  type: Flexe\n\n  parameters:\n    segments:\n    - repeat: True\n\n    profiles:\n    - name: ethernet\n      parameters:\n        runTime: 30\n\n        bandwidthUp: 100000\n        bandwidthDown: 100000\n        delay: 0.25\n        delayVariation: 0.25\n\n    - name: 3g\n      parameters:\n        runTime: 30\n\n        bandwidthUp: 256\n        bandwidthDown: 256\n        delay: 200\n        delayVariation: 50\n        loss: 0.5\n        duplication: 0.1\n        corruption: 0.1\n        reorder: 0.2\n\n  egress:\n  - to:\n    - ipBlock:\n        cidr: 1.1.1.1/32\n\n    - podSelector:\n        matchLabels:\n          component: example\n\n    ports:\n    - port: 443\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n\n  - to:\n    - ipBlock:\n        cidr: 8.8.8.8/32\n\n  - ports:\n    - port: 80\n      protocol: tcp\n")),(0,i.kt)("h2",{id:"example-trafficprofile-for-builtin-controller"},"Example ",(0,i.kt)("em",{parentName:"h2"},"TrafficProfile")," for Builtin controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: k8s-netem.riasc.eu/v1\nkind: TrafficProfile\nmetadata:\n  name: profile-builtin\nspec:\n  podSelector:\n    matchLabels:\n      traffic-profile: builtin\n\n  type: Builtin\n  parameters:\n    netem:\n      delay: 0.2 # seconds\n      loss_ratio: 0.2 # in [0, 1]\n\n  egress:\n  - to:\n    - ipBlock:\n        cidr: 1.1.1.1/32\n    - podSelector:\n        matchLabels:\n          component: example\n\n    inetProtos:\n    - icmp\n")),(0,i.kt)("h3",{id:"example-pod"},"Example Pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    component: example\n    traffic-profile: builtin\n  name: example-pod-1\nspec:\n  containers:\n  - command:\n    - ping\n    - 1.1.1.1\n    image: nicolaka/netshoot\n    name: ping-cloudflare\n    securityContext:\n      capabilities:\n        add:\n        - NET_ADMIN\n")),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User creates a new ",(0,i.kt)("em",{parentName:"li"},"TrafficProfile")," CR"),(0,i.kt)("li",{parentName:"ol"},"User creates one or more ",(0,i.kt)("em",{parentName:"li"},"Pods")," which match the ",(0,i.kt)("inlineCode",{parentName:"li"},"podSelector")," of the ",(0,i.kt)("em",{parentName:"li"},"TrafficProfile")," CR"),(0,i.kt)("li",{parentName:"ol"},"A mutating admission webhook will inject a Sidecar container into the newly created ",(0,i.kt)("em",{parentName:"li"},"Pods")),(0,i.kt)("li",{parentName:"ol"},"The sidecar container will configure the network traffic controller by:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Watching for new/modified ",(0,i.kt)("em",{parentName:"li"},"TrafficProfile")," matching the ",(0,i.kt)("inlineCode",{parentName:"li"},"podSelector")),(0,i.kt)("li",{parentName:"ol"},"Watching for new/modified ",(0,i.kt)("em",{parentName:"li"},"Pods")," which match the ingress/egress peers ",(0,i.kt)("inlineCode",{parentName:"li"},"podSelector"),"s",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New matching ",(0,i.kt)("em",{parentName:"li"},"Pods")," will be added to IPsets"),(0,i.kt)("li",{parentName:"ul"},"Previously matching ",(0,i.kt)("em",{parentName:"li"},"Pods")," which have been deleted will be removed from the IPsets."))),(0,i.kt)("li",{parentName:"ol"},"Configuring the traffic impairment by configuring one or more netem Qdiscs and attaching them to their dedicated IPsets filters.")))),(0,i.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"k8s-netem")," can be deployed by a dedicated ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ERIGrid2/charts/tree/master/charts/netem"},(0,i.kt)("inlineCode",{parentName:"a"},"k8s-netem")," Helm chart"),"."),(0,i.kt)("h3",{id:"custom-resources"},"Custom Resources"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"k8s-netem")," defines a new CRD ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s-netem.riasc.eu/v1/trafficprofiles"),"."),(0,i.kt)("h3",{id:"mutating-admission-webhook"},"Mutating Admission Webhook"),(0,i.kt)("p",null,"The mutating admission webhooks gets invoked by the Kubernetes API server for each created, modified or deleted ",(0,i.kt)("em",{parentName:"p"},"Pod")," resource."),(0,i.kt)("p",null,"The webhook will check if any of the existing ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," targets the ",(0,i.kt)("em",{parentName:"p"},"Pod"),".\nIf this is the case, an additional sidecar container will be injected into the ",(0,i.kt)("em",{parentName:"p"},"Pod"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Currently, the webhook will only inject the sidecar if the ",(0,i.kt)("em",{parentName:"p"},"TrafficProfile")," already exists at the time of the ",(0,i.kt)("em",{parentName:"p"},"Pod")," creation or update. ",(0,i.kt)("em",{parentName:"p"},"k8s-netem")," will not re-create ",(0,i.kt)("em",{parentName:"p"},"Pods")," after a new ",(0,i.kt)("em",{parentName:"p"},"TrafficProfile")," is added to the cluster. It is the responsibility to re-create ",(0,i.kt)("em",{parentName:"p"},"Pods")," in order for the side-cards to be injected."),(0,i.kt)("h3",{id:"sidecar-containers"},"Sidecar Containers"),(0,i.kt)("p",null,"The sidecar container will run alongside the user containers for the full life-cycle of the ",(0,i.kt)("em",{parentName:"p"},"Pod"),".\nIt is tasked with the synchronization of ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," with the Kernel TC / IPset data structures."),(0,i.kt)("p",null,"This means, modifications of existing ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," by the user (e.g. to adjust impairment parameters) are synced to the Linux kernel configuration."),(0,i.kt)("p",null,"At the same time the sidecar container will watch for new or deleted ",(0,i.kt)("em",{parentName:"p"},"Pods")," which match the ingres/egress peer podSelectors and add their podIPs to the respective IPsets which are used by the TC filters."),(0,i.kt)("h3",{id:"flow-classification"},"Flow classification"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"k8s-netem")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://nftables.org"},"NFtables")," to classify network traffic flows based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.egress")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ingress")," filters.\nUpdates to these NFTables are easy as CIDRs, Ports, Ether-types and IP protocols used in the filters are stored in NFTables sets which can easily be manipulated without affecting the other filters."),(0,i.kt)("p",null,"Each ",(0,i.kt)("em",{parentName:"p"},"TrafficProfile")," allocate a dedicated firewall mark (",(0,i.kt)("inlineCode",{parentName:"p"},"fwmark"),") from a per-",(0,i.kt)("em",{parentName:"p"},"Pod")," pool of marks.\nThe NFTables rule will mark the selected traffic flows using this mark which later is used by a TC filter."),(0,i.kt)("h3",{id:"support-for-multiple-simultaneous-trafficprofiles-controllers-and-interfaces-per-pod"},"Support for multiple simultaneous ",(0,i.kt)("em",{parentName:"h3"},"TrafficProfiles"),", Controllers and Interfaces per ",(0,i.kt)("em",{parentName:"h3"},"Pod")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"k8s-netem")," supports multiple ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," matching the same ",(0,i.kt)("em",{parentName:"p"},"Pod")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.podSelector"),".\nEach profile can also target a specific interface within the container by using a regular expression in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.interfaceFilter"),".\nMultiple ",(0,i.kt)("em",{parentName:"p"},"TrafficProfiles")," targeting the same interface within the same ",(0,i.kt)("em",{parentName:"p"},"Pod")," are supported as long as they share the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.type"),"."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.altoros.com/blog/kubernetes-networking-writing-your-own-simple-cni-plug-in-with-bash/"},"https://www.altoros.com/blog/kubernetes-networking-writing-your-own-simple-cni-plug-in-with-bash/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://networkop.co.uk/post/2018-11-k8s-topo-p1/"},"https://networkop.co.uk/post/2018-11-k8s-topo-p1/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/networkop/k8s-topo"},"k8s-topo"))))}d.isMDXComponent=!0}}]);