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
  }

  hydrate() {
    new TypeIt('#greeting', {
      strings: ["Hi, I'm Guilherme Borba 👋"],
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
      <main class="p-4 md:p-16 mb-[200px] mb-0">
        <section class="flex flex-col-reverse sm:flex-row">
          <div class="w-full">
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
                  Thanks for checking out my portfolio! I'm always open to exciting opportunities
                  and collaborations.
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
            <article class="md:h-screen w-full mb-5 space-y-8 p-6">
              <div class="max-w-lg space-y-2">
                <h1 class="text-3xl">My Achievements 🏆</h1>
              </div>
              <section class="max-w-lg bg-gray-900 text-white py-8">
                <p class="text-lg mb-6">
                  I have contributed to various successful projects and achieved significant
                  milestones.
                </p>
                <ul class="list-inside">
                  <li class="mb-4 p-4 rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                    <span class="block font-bold text-lg">
                      ElectricSMS - Multi-Million Dollar Deal 💰
                    </span>
                    I worked on ElectricSMS, a Subscription Management Tool that proved to be
                    immensely successful. The project was later acquired by ReCharge in a{' '}
                    <span class="font-bold">MULTI-MILLION</span> dollar deal. It has already
                    assisted 220,000 unique users in managing their subscriptions and processed over
                    $25 million in revenue for 56 merchants.
                  </li>
                  <li class="mb-4 p-4 rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                    <span class="block font-bold text-lg">Tech Lead for Instill Video 🚀</span>
                    As a Tech Lead, I played an essential role in the development of Instill Video.
                    During this project, I provided technical leadership and guided the development
                    team to ensure the successful creation of a high-performance, white-label video
                    streaming platform. This platform significantly enhanced the user experience and
                    overall performance, achieving a Lighthouse score of 100.
                  </li>
                  <li class="mb-4 p-4 rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                    <span class="block font-bold text-lg">
                      ThePilatesClass - First Client Success 🔥
                    </span>
                    With ThePilatesClass being our first client for the video streaming platform, I
                    contributed to their success by creating engaging video streaming experiences
                    for their content creators. Over a period of 14 months, we helped
                    ThePilatesClass build a substantial membership base of over 53,000 subscribers,
                    demonstrating the effectiveness of the platform.
                  </li>
                </ul>
                <p class="text-lg">
                  These achievements highlight my expertise in leading and developing successful
                  projects, as well as my ability to deliver high-quality solutions that have a
                  significant impact on the success of clients and businesses.
                </p>
              </section>
            </article>
          </div>
          <aside class="w-full sm:w-1/4 sm:sticky top-[25px] h-full">
            <Link href="https://linkedin.com/in/guilhermeborba">
              <img class="w-full inline-block rounded-lg" src="/borba-chan.jpg" />
            </Link>
          </aside>
        </section>
      </main>
    )
  }
}

export default Home
