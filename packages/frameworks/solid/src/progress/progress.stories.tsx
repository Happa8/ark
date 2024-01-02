import type { Meta } from 'storybook-solidjs'
import { Progress } from './'
import './progress.css'

type ProgressType = typeof Progress

const meta: Meta<ProgressType> = {
  title: 'Progress',
  component: Progress,
}

export default meta

export const Basic = () => (
  <Progress.Root>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Indicator state="loading" />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)

export const InitialValue = () => (
  <Progress.Root value={70}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)

export const Max = () => (
  <Progress.Root value={20} max={30}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)

export const Circular = () => (
  <Progress.Root value={40}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)

export const Vertical = () => (
  <Progress.Root orientation="vertical">
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
