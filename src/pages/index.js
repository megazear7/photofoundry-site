import { html } from 'orison';

export default context => html`
  <section>
    <div>
      <img class="center img-128" src="/icons/icon-128x128.png"></img>
    </div>

    ${context.mdFile('./src/partials/getting-started.md')}

    <div class="center">
      <a href="https://github.com/megazear7/photofoundry">Photofoundry on Github</a>
    </div>
    <br>
  </section>
`;
