import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'
import TypeIt from 'typeit'

interface HomeProps {}

interface HomeLinkProps {
  href: string
}

declare function Link(context: HomeLinkProps): NullstackNode
declare function ActionLink(context: HomeLinkProps): NullstackNode

class Home extends Nullstack<HomeProps> {
  prepare({ project, page }: NullstackClientContext<HomeProps>) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
  }

  hydrate() {
    new TypeIt('#greeting', {
      strings: ["Hi, I'm Borba"],
      speed: 60
    }).go()
  }

  renderLink({ children, href }: NullstackClientContext<HomeProps & HomeLinkProps>) {
    return (
      <a class="text-pink-500 ml-1" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  renderActionLink({ children, href }: NullstackClientContext<HomeProps & HomeLinkProps>) {
    return (
      <a
        class="inline-block text-pink-500 mb-1"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  render({ project }: NullstackClientContext<HomeProps>) {
    return (
      <main class="p-16">
        <section class="flex flex-col sm:flex-row">
          <article class="md:h-screen w-full mb-5 space-y-8 p-6">
            <div class="max-w-lg space-y-2">
              <h1 id="greeting" class="text-3xl" />
              <p>A full-stack developer with a passion for technology and product. 😍</p>
              <p>
                Skilled in software development and team leadership, with{' '}
                <span class="text-lg font-bold">6+</span> years of experience.
              </p>
            </div>
            <div>
              <h2 class="text-lg font-semibold mb-4">Main Skills</h2>
              <div class="flex items-center space-x-3">
                <div class="text-center space-y-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="React.js"
                    class="h-16 w-16 inline-block"
                  />
                  <p class="text-sm font-semibold">React.js</p>
                </div>
                <div class="text-center space-y-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
                    alt="Node.js"
                    class="h-16 w-16 inline-block"
                  />
                  <p class="text-sm font-semibold">Node.js</p>
                </div>
                <div class="text-center space-y-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                    alt="JavaScript"
                    class="h-16 w-16 inline-block"
                  />
                  <p class="text-sm font-semibold">JavaScript</p>
                </div>
                <div class="text-center space-y-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png"
                    alt="TypeScript"
                    class="h-16 w-16 inline-block"
                  />
                  <p class="text-sm font-semibold">TypeScript</p>
                </div>
              </div>
            </div>
            <div class="max-w-md">
              <p class="text-gray-300">
                Thanks for checking out my portfolio! I'm always open to exciting opportunities and
                collaborations.
              </p>
              <p class="mt-4">
                <a
                  href="mailto:borbsdev@gmail.com"
                  class="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition-transform"
                >
                  <span class="font-semibold">Let's chat!</span>
                </a>
              </p>
            </div>
          </article>
          <aside class="w-full sm:w-1/4 sm:sticky top-[25px] h-full">
            <Link href="https://linkedin.com/in/guilhermeborba">
              <img
                class="w-full inline-block rounded-lg"
                src="/borba-chan.jpg"
                alt="Nulla-Chan: Nullstack's official waifu"
              />
            </Link>
          </aside>
        </section>
      </main>
    )
  }
}

export default Home
