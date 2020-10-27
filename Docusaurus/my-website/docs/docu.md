---
id: docu
title: Docusaurus
---

## Docusaurus Basics
Document where some of the docusaurus basics are included. <br/>

---

### Adding a MD Document
First, you have to create the .md file. This file must be in the  "docs" folder. <br/>
It is important to add an id and a title at the start of the file, like this: <br/>
```
---
id: WriteIdHere
title: WriteTitleHere
---
```
<br/>

After this, go to the *sidebars.js* file (inside *my-website* folder) and add the *id* of your new file to add it to the page. <br/>

```
module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3','AddIdHere'],
    Features: ['mdx'],
  },
};
```
