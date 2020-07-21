#!/usr/bin/env node
import yargs from 'yargs'
import run from './index.js'

const options = yargs => {
  yargs.option('save', {
    desc: 'Save export maps and browser fields'
  })
}

const desc = 'Build require() dist output for Node.js and old browser compilers'

const args = yargs.command('$0 [files..]', desc, options, run).argv
if (!args.files) {
  yargs.showHelp()
  process.exit()
}
