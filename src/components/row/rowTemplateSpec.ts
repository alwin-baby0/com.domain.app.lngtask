import Lightning from '@lightningjs/sdk/src/Lightning'
import { MovieData } from '../../models/models'

interface RowTemplateSpec extends Lightning.Component.TemplateSpecLoose {
  __data: MovieData

  data: MovieData
}

export default RowTemplateSpec
