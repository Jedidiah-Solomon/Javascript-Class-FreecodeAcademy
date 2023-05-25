This extension formats your code e.g in js files changes single colons to double or vice versa.

1. Right click and format document with Prettier ...........this is slow so use #2.

2. Go to settings, type -----format-----
   you can do this for user (this is global for all users) or workspace for a particular work project.

Editor: Default Formatter
Defines a default formatter which takes precedence over all other formatter settings. Must be the identifier of an extension contributing a formatter......select prettier as the default

tick format on save

Do so for the user and workspace anyone you want to use.

This will create a settings.json file in .vscode folder with content as:

{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}

we can change the save stuff to false to stop it in this local project.

3. the best practice is after vs code adds setings.json, you add your personal file to expalin your own settings e.g in settings type -------prettier----------------

so craete a configuration file at project root e.g .prettierrc.json

Go to prettier website to get how can setthis new file e.g

{
"singleQuote": true,
"semi": true
}

The singleQuote set to true will make e.g my js files to have single quotes not double while semi will add semi-colon at the end .
