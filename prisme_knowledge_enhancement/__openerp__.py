# -*- coding: utf-8 -*-

{
    'name' : 'Prisme Knowledge Enhancement',
    'version' : '0.1',
    'depends' : ['web', 'document_page', 'document', 'knowledge'],
    'author' : 'Prisme Solution Informatique',
    'description' : 'Default editor for pages changed to CKEditor',
    'website' : 'http://www.prisme.ch',
    'installable' : True,
    'active' : False,
    'data' : ['view/document_page_view.xml',],
    "js": ["static/src/js/cke.js",
           "static/lib/js/ckeditor/ckeditor.js", ],
    "css": ["static/src/css/knowledge.css",],
    "qweb": ["static/src/xml/*.xml", ]
}
