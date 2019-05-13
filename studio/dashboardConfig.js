export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd917d17775a080d055b008',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g4jqjj8a',
                  apiId: 'e62c2ff9-7925-47ed-af9a-317eb4289193'
                },
                {
                  buildHookId: '5cd917d1b65565fb19a9b6d6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3vw77vpk',
                  apiId: '65087742-2f30-4bcd-ade5-545ecf228c5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oyvindrostad/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-3vw77vpk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
