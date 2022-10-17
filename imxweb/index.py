import inquirer
import os

CHECKBOX_NAME = 'modules'
questions = [
    inquirer.Checkbox(CHECKBOX_NAME,
                      message="which modules do you need? (Please consider the order)",
                      choices=['qbm', 'qer', 'ccc', 'tsb',
                               'att', 'rms', 'rps', 'aad',
                               'aob', 'uci', 'cpl', 'hds',
                               'dpr', 'o3t', 'olg', 'pol'],
                      carousel=True
                      )
]
selectedModules = inquirer.prompt(questions)[CHECKBOX_NAME]
lastModuleSelected = selectedModules[len(selectedModules)-1]
commandToExecute = ''

for module in selectedModules:
    if lastModuleSelected == module:
        commandToExecute += 'npm run build ' + module + ' && npm start'
    else:
        commandToExecute += 'npm run build ' + module + ' && '

print(commandToExecute)
os.system(commandToExecute)
