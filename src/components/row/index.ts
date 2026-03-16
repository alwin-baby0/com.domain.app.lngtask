import Lightning from '@lightningjs/sdk/src/Lightning'
import RowTemplateSpec from './rowTemplateSpec'
import { MovieData } from '../../models/models'
import Card from '../card'
import { cardDinmenions, textColor } from '../../constants'

class Row
  extends Lightning.Component<RowTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<RowTemplateSpec> {
  __data: MovieData = []
  _index = 0

  readonly Wrapper = this.tag('Wrapper')

  static override _template() {
    return {
      Row: {
        w: this.bindProp('_width'),
        h: this.bindProp('_height'),
        Title: {
          text: {
            textColor: textColor,
            text: 'Animated Movies',
          },
        },
        RowItems: {
          y: 75,
          Slider: {
            Wrapper: {},
          },
        },
      },
    }
  }

  override _getFocused() {
    return this.Wrapper.children[this._index]
  }

  override _handleLeft() {
    if (this._index > 0) {
      this._index -= 1
      this.repositionWrapper()
    }
  }

  override _handleRight() {
    if (this._index < this.__data?.length - 1) {
      this._index += 1
      this.repositionWrapper()
    }
  }

  override _handleBack() {
    this._index = 0
    this.repositionWrapper()
  }

  _createRow = () => {
    const cards = []

    for (let i = 0; i < this.__data?.length; i++) {
      const width = cardDinmenions.width
      const height = cardDinmenions.height
      const marginRight = cardDinmenions.marginRight
      const cardData = this.__data?.[i]
      cards.push({
        x: i * (width + marginRight),
        width: width,
        height: height,
        type: Card,
        thumbnailImage: cardData?.posterURL ?? '',
        title: cardData?.title ?? '',
        subtitle: cardData?.subtitle ?? '',
      })
    }
    this.Wrapper.children = cards
  }

  repositionWrapper() {
    const wrapper = this.Wrapper
    if (this._index <= this.__data?.length - cardDinmenions.minimumCadsInViewport) {
      wrapper.setSmooth('x', -(cardDinmenions.width + cardDinmenions.marginRight) * this._index, {
        delay: 0.025,
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.25, 0.25, 0.25, 0.25)',
      })
    }
  }

  set data(value: MovieData) {
    this.__data = value
    this._createRow()
  }
}

export default Row
