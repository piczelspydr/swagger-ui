import React from "react"
import swaggerUIConstructor from "./swagger-ui"

export class SwaggerUI extends React.Component {
  constructor (props) {
    super(props)
    this.SwaggerUIComponent = null
    this.system = null
  }
  
  componentDidMount() {
    const ui = swaggerUIConstructor({
      url: this.props.url,
      displayOperationId: this.props.displayOperationId
    })

    this.system = ui
    this.SwaggerUIComponent = ui.getComponent("App", "root")

    this.forceUpdate()
  }
  
  render() {
    return this.SwaggerUIComponent ? <this.SwaggerUIComponent /> : null
  }

  componentDidUpdate(prevProps) {
    if(this.props.displayOperationId !== prevProps.displayOperationId) {
      this.system.getConfigs().displayOperationId = this.props.displayOperationId  // XXX: this is bad
    }
  }
}
