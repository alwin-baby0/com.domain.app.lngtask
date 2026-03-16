import Lightning from '@lightningjs/sdk/src/Lightning'
import { MovieData } from '../../models/models'

interface RowTemplateSpec extends Lightning.Component.TemplateSpecLoose {
  __data: MovieData

  Row: {
    Title: object
    RowItems: { Slider: { Wrapper: object } }
  }

  data: MovieData
}

export default RowTemplateSpec
