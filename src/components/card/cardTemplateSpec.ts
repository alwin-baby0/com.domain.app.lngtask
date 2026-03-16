import Lightning from '@lightningjs/sdk/src/Lightning'

interface CardTemplateSpec extends Lightning.Component.TemplateSpecLoose {
  __title: string
  __subtitle: string
  __thumbnailImage: string

  Thumbnail: {
    Focus: object
    Image: object
  }
  Title: object
  Subtitle: object

  title: string
  subtitle: string
  thumbnailImage: string
}

export default CardTemplateSpec
