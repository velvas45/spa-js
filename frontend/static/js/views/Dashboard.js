import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Welcome back, Helmi</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias nostrum sapiente sequi perferendis fuga dolore sunt quod, provident voluptas omnis veritatis dolores recusandae eligendi, minus labore neque repellat facilis?
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
    `;
  }
}
