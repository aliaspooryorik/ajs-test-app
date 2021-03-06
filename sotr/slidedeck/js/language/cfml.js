/**
 * HTML patterns
 *
 * @author Craig Campbell
 * @version 1.0.6
 */
Rainbow.extend('cfml', [
    {
        'name': 'source.cfml.embedded',
        'matches': {
            2: {
                'language': 'cfml'
            }
        },
        'pattern': /&lt;(cfscript)?([\s\S]*?)(\?&gt;)/gm
    },
    {
        'name': 'source.css.embedded',
        'matches': {
            0: {
                'language': 'css'
            }
        },
        'pattern': /&lt;style(.*?)&gt;([\s\S]*?)&lt;\/style&gt;/gm
    },
    {
        'name': 'source.js.embedded',
        'matches': {
            0: {
                'language': 'javascript'
            }
        },
        'pattern': /&lt;script(?! src)(.*?)&gt;([\s\S]*?)&lt;\/script&gt;/gm
    },
    {
        'name': 'comment.tags',
        'pattern': /&lt;\!---[\S\s]*?---&gt;/g
    },
    {
    	'name': 'comment.script',
    	'pattern': /\/\/.*\n/g
    },
    {
        'matches': {
            1: 'support.tag.open',
            2: 'support.tag.close'
        },
        'pattern': /(&lt;)|(\/?\??&gt;)/g
    },
    {
        'name': 'support.tag',
        'matches': {
            1: 'support.tag',
            2: 'support.tag.special',
            3: 'support.tag-name'
        },
        'pattern': /(&lt;\??)(\/|\!?)(\w+)/g
    },
    {
        'matches': {
            1: 'support.attribute'
        },
        'pattern': /([a-z-]+)(?=\=)/g
    },
    {
        'matches': {
            1: 'support.operator',
            2: 'string.quote',
            3: 'string.value',
            4: 'string.quote'
        },
        'pattern': /(=)('|")(.*?)(\2)/g
    },
    {
        'matches': {
            1: 'support.operator',
            2: 'support.value'
        },
        'pattern': /(=)([a-zA-Z\-0-9]*)\b/g
    },
    {
        'matches': {
            1: 'support.method'
        },
        'pattern': /(component|transaction)/g
    },
    {
        'matches': {
            1: 'support.function'
        },
        'pattern': /(EntityLoad|EntityLoadByPK|ORMExecuteQuery|ORMSearch|EntityDelete|EntitySave|ORMReload|EntityNew|WriteDump)(?=\()/gi

    },
    {
        'matches': {
            1: 'support.attribute'
        },
        'pattern': /\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g
    },
    {
    	'matches': {
    		1: 'support.html'
    	},
    	'pattern': /<(p|br)>(?=\()/gi
    		
    }
], true);