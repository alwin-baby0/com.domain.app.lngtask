import Lightning from '@lightningjs/sdk/src/Lightning'
import RowTemplateSpec from './rowTemplateSpec'
import { MovieData } from '../../models/models'
import Card from '../card'
import { cardDinmenions } from '../../constants'

class Row
  extends Lightning.Component<RowTemplateSpec>
  // eslint-disable-next-line prettier/prettier
  implements Lightning.Component.ImplementTemplateSpec<RowTemplateSpec> {
  __data: MovieData = []

  static override _template() {
    return {
      Row: {
        w: this.bindProp('_width'),
        h: this.bindProp('_height'),
        Title: {
          text: {
            text: 'Animated Movies',
          },
        },
        RowItems: {
          y: 63,
          Slider: {
            Wrapper: {},
          },
        },
      },
    }
  }

  createRow = () => {
    const cards = []

    for (let i = 0; i < this.__data?.length; i++) {
      const width = cardDinmenions.width
      const height = cardDinmenions.height
      const marginRight = 20
      const cardData = this.__data?.[i]
      cards.push({
        x: i * (width + marginRight),
        width: width,
        height: height,
        type: Card,
        thumbnailImage: cardData?.posterURL,
        title: cardData?.title,
        subtitle: cardData?.subtitle,
      })
    }
    this.tag('Wrapper').children = cards
  }

  set data(value: MovieData) {
    this.__data = value
    this.createRow()
  }
}

export default Row
