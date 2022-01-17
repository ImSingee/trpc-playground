import { ComponentChildren } from 'preact'
import { DeepRequiredClientConfig } from '../types'
import { Editor } from './editor'
import { PlaygroundProvider } from './provider'
import { TabGroup } from './tab/group'
import { Toolbar } from './toolbar'
export type PlaygroundProps = {
  config: DeepRequiredClientConfig
  children?: ComponentChildren
}

export const Playground = ({ config, children }: PlaygroundProps) => {
  return (
    <PlaygroundProvider config={config}>
      <link
        href='https://fonts.googleapis.com/css?family=JetBrains+Mono'
        rel='stylesheet'
      />

      <div className='text-white bg-slate-800 pt-4'>
        <TabGroup />
        <Toolbar />
        <Editor />
      </div>
      {children}
    </PlaygroundProvider>
  )
}
