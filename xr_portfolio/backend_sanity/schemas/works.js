export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      }, 
      {
        name: 'summary',
        title: 'Summary',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'typerole',
        title: 'Type "Role:"',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'typetoolsused',
        title: 'Type "Tools Used:"',
        type: 'string',
      },
      {
        name: 'tech',
        title: 'Technology Used',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };