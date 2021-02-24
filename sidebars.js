module.exports = {
  docs: [
	{
		type: 'category',
		label: 'Getting started',
		items: ['index', 'getting-started', 'further-reading'],
	},
	{
		type: 'category',
		label: 'Design',
		items: [
			'design/ip-overlay',
			'design/ip-gateway',
			'design/network-emulation',
			'design/code-generation'
		]
	},
	{
		type: 'category',
		label: 'Setup',
		items: [
			'setup/index',
			'setup/ansible',
			'setup/server',
			{
				type: 'category',
				label: 'Agent',
				items: [
					'setup/agent-rpi',
					'setup/agent-fcos'
				]
			}
		]
	},
	{
		type: 'category',
		label: 'Usage',
		items: [
			'usage/index'
		]
	},
	{
		type: 'category',
		label: 'Examples',
		items: [
			'examples/index'
		]
	}
  ]
};
