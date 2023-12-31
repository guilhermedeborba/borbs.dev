import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import '../tailwind.css'
import Home from './Home'

declare function Head(): NullstackNode

class Application extends Nullstack {
  prepare({ page }: NullstackClientContext) {
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render() {
    return (
      <body class="text-white font-roboto bg-gradient-to-r from-gray-950 to-gray-800">
        <Head />
        <Home route="/" />
      </body>
    )
  }
}

export default Application
