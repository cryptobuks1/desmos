(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{248:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-your-validator-node-to-a-new-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-your-validator-node-to-a-new-network"}},[e._v("#")]),e._v(" Migrate your validator node to a new network")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Upgrade-only guide")]),e._v(" "),a("p",[e._v("The following guide is intended for all validators that are currently operating on a Desmos chain version and would like to upgrade to a new version.")]),e._v(" "),a("p",[e._v("If you wish to run a new validator node instead, please reference the "),a("router-link",{attrs:{to:"/validators/setup.html"}},[e._v("setup instructions")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"_1-stop-the-currently-running-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-stop-the-currently-running-node"}},[e._v("#")]),e._v(" 1. Stop the currently running node.")]),e._v(" "),a("p",[e._v("First of all we need to stop the currently running validator node. To do so you can go inside the console where you have run "),a("code",[e._v("desmosd start")]),e._v(" and type "),a("code",[e._v("Ctrl + C")]),e._v(". This will halt your fullnode gracefully.")]),e._v(" "),a("p",[e._v("If you have also setup a "),a("router-link",{attrs:{to:"/fullnode/installation.html#optional-configure-the-service"}},[e._v("background service")]),e._v(", please stop that too by executing the following command:")],1),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl stop desmosd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-export-the-current-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-export-the-current-state"}},[e._v("#")]),e._v(" 2. Export the current state")]),e._v(" "),a("p",[e._v("Once the fullnode has been properly stopped, you can export the current chain state. To do so execute the following command:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("desmosd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" --for-zero-height "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" old-state.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will allow you to write the current chain state to the "),a("code",[e._v("old-state.json")]),e._v(" file inside the current directory.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Beware of state changes")]),e._v(" "),a("p",[e._v("During some updates it might happen that you need to perform some justified state changes before updating the fullnode and migrating to the new version.")]),e._v(" "),a("p",[e._v("Before performing such changes make sure the people that tell you to do so are allowed to do it. Any required change will however be also written inside the "),a("a",{attrs:{href:"https://github.com/desmos-labs/morpheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnets repo"),a("OutboundLink")],1),e._v(" so make sure to always check that before performing any modification.")])]),e._v(" "),a("h2",{attrs:{id:"_3-update-the-underlying-fullnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-update-the-underlying-fullnode"}},[e._v("#")]),e._v(" 3. Update the underlying fullnode")]),e._v(" "),a("p",[e._v("Once you have stopped your validator, it is now time to update the Desmos binaries that allow your fullnode to run properly. To do so please reference the "),a("router-link",{attrs:{to:"/fullnode/update.html"}},[e._v("fullnode updating guide")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Do not start the fullnode yet")]),e._v(" "),a("p",[e._v("After updating the fullnode software "),a("strong",[e._v("do not")]),e._v(" start it yet. If you have mistakenly started it, please shut it down before continuing.")])]),e._v(" "),a("h2",{attrs:{id:"_4-migrate-to-a-new-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-migrate-to-a-new-network"}},[e._v("#")]),e._v(" 4. Migrate to a new network")]),e._v(" "),a("p",[e._v("After updating the fullnode, it is now time to migrate the old chain state to a new genesis state. To do so, you need to execute the following command:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" ~/.desmosd/config/\ndesmosd migrate "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ./old-state.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("new-chain-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --genesis-time "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("new-genesis-time"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ~/.desmosd/config\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Please note that the "),a("code",[e._v("version")]),e._v(", "),a("code",[e._v("new-chain-id")]),e._v(" and the "),a("code",[e._v("new-genesis-time")]),e._v(" will be communicated to you in advance and will also be available inside the proper folder "),a("a",{attrs:{href:"https://github.com/desmos-labs/morpheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("on the testnets repo"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once you have migrated the genesis file, you need to reset the status of your node.")]),e._v(" "),a("h2",{attrs:{id:"_5-reset-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-reset-your-node"}},[e._v("#")]),e._v(" 5. Reset your node")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Make sure you understand what you are doing")]),e._v(" "),a("p",[e._v("Please be cautious when you reset your node. Unintended mistakes may lead to missing validator key or double sign.")])]),e._v(" "),a("p",[e._v("Resetting the node will have the followings happen.")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Reset validating state")])]),e._v(" "),a("li",[a("strong",[e._v("Remove chain data")])]),e._v(" "),a("li",[a("strong",[e._v("Remove address book")])])]),e._v(" "),a("p",[e._v("To reset the node, you need to execute the following command:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("desmosd unsafe-reset-all\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Please make sure your validator key located at "),a("code",[e._v("~/.desmosd/config/priv_validator_key.json")]),e._v(" is intact.")]),e._v(" "),a("h2",{attrs:{id:"_6-start-the-fullnode-again"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-start-the-fullnode-again"}},[e._v("#")]),e._v(" 6. Start the fullnode again")]),e._v(" "),a("p",[e._v("After you have properly migrated the genesis state, you can start again the fullnode and the validator by running")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("desmosd start\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Peers not connecting")]),e._v(" "),a("p",[e._v("After updating the node to a new chain, it is normal that it cannot find any peer in the first blocks. However, if your node keeps having problem after a couple of hours, please contact us on the dedicated channels to help you with the troubleshooting.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);