import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../../icons/qwik";
import styles from "./navbar.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://github.com/CarlosM0905"
              target="_blank"
            >
              <i class="fa-brands fa-github fa-beat-fade text-lg mr-2"></i>
              CarlosM0905
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
