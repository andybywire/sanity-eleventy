export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f95ce3198c2a57737789d42',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-studio-5nx3n1o6',
                  apiId: '47dbd22e-d08f-496b-8fc4-627040fa0f5d'
                },
                {
                  buildHookId: '5f95ce31fc396aea55d6eb81',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-web-iwws82w9',
                  apiId: '3e7247cd-8caa-4db3-a234-166e7743205f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andybywire/sanity-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-web-iwws82w9.netlify.app', category: 'apps'}
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
