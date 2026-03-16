import Lightning from '@lightningjs/sdk/src/Lightning'
import ErrorScreenTemplateSpec from './errorScreenTemplateSpec'
import { textColor } from '../../constants'

class ErrorScreen
  extends Lightning.Component<ErrorScreenTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<ErrorScreenTemplateSpec> {
  __enterHandler = () => {
    //
  }

  static override _template() {
    return {
      ErrorText: {
        text: {
          textColor: textColor,
          text: 'Oops! Something went wrong.',
        },
        mount: 0.5,
        x: 1920 / 2,
        y: 1080 / 2 - 50,
      },
      RetryButton: {
        rect: true,
        color: textColor,
        w: 250,
        h: 80,
        mount: 0.5,
        x: 1920 / 2,
        y: 1080 / 2 + 50,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 6 },
        RetryText: {
          text: { text: 'Retry', textColor: 0xff000000, fontSize: 35 },
          mount: 0.5,
          x: 250 / 2,
          y: 80 / 2,
        },
      },
    }
  }

  override _handleEnter() {
    this.__enterHandler()
  }

  set enterHandler(value: () => void) {
    this.__enterHandler = value
  }
}

export default ErrorScreen
