export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cf02852db97d35ae45f78cc',
                  title: 'Sanity Studio',
                  name: 'vj-union-software-studio',
                  apiId: 'be57dbf4-74de-40f7-9eec-82689fa3e0a1'
                },
                {
                  buildHookId: '5cf028528ddf3b0789108124',
                  title: 'Blog Website',
                  name: 'vj-union-software',
                  apiId: '2bc913b8-4f31-49d2-ad27-8a9731c013f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vdmokstati/vj-union-software',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vj-union-software.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
