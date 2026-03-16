import Lightning from '@lightningjs/sdk/src/Lightning'
import LoadingScreenTemplateSpec from './loadingCsreenTemplateSpec'
import { textColor } from '../../constants'

class LoadingScreen
  extends Lightning.Component<LoadingScreenTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<LoadingScreenTemplateSpec> {

  static override _template() {
    const radius = 60
    return {
      Spinner: {
        mount: 0.5,
        w: radius * 2,
        h: radius * 2,
        x: 1920 / 2,
        y: 1080 / 2 - radius,
        color: 0xff2a2a2a,
        rect: true,
        shader: { type: Lightning.shaders.Spinner2, stroke: 12, color: textColor, radius: radius },
      },
      LoadingText: {
        text: {
          textColor: textColor,
          text: 'Getting your favorite channels..',
        },
        mount: 0.5,
        x: 1920 / 2,
        y: 1080 / 2 + radius,
      },
    }
  }
}

export default LoadingScreen
