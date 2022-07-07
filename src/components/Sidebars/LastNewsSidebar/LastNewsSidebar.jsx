import React from "react"

import styles from "./LastNewsSidebar.module.css"

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.sidebar_item}>
        <div className={styles.sidebar_item_img}>
          <img
            src="data:image/webp;base64,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"
            alt=""
          />
        </div>
        <div className={styles.sidebar_item_inf}>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h3>
              <a href="">
                Pellentesque mattis arcu massa, nec fringilla turpis eleifend
                id.
              </a>
            </h3>
          </div>
          <div className={styles.date}>
            <span>7:00 AM</span> || <span>April 14</span>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_item}>
        <div className={styles.sidebar_item_img}>
          <img
            src="data:image/webp;base64,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"
            alt=""
          />
        </div>
        <div className={styles.sidebar_item_inf}>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h3>
              <a href="">
                Pellentesque mattis arcu massa, nec fringilla turpis eleifend
                id.
              </a>
            </h3>
          </div>
          <div className={styles.date}>
            <span>7:00 AM</span> || <span>April 14</span>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_item}>
        <div className={styles.sidebar_item_img}>
          <img
            src="data:image/webp;base64,UklGRpAJAABXRUJQVlA4IIQJAACwKQCdASpkAGQAPm0uk0ekIiGhKJO8cIANiUAY5ROqCiHHs78mfV3Ku9ARwzwp82nvGUTcT9bX1frd7UZiaAD60+cx8n/w/SD7H/7r0TfTzw2/D/YA/nH9h9HvTfqJ/rqI3nX93r4acD2EHcS3elNmq9wFZ48Ki3Xui2VEIFrzLu0imPr1oUjZQNAfQDWC1SzSBc+wGrsvS847D//DHrMVb535PaBjPskzBhG8Xvvb+lThAv2j/UM5oFUOmbawQGzlQn3yBsYVuJktKhVPQmRb+HpuqAi99gwHxlv84zoK0yjKMwBK8+o9ErQgZE6tdLpVEwrgzDe6YKmNbhu3bydAewbZgg0lG/4ybX1XNMrIRpy6fovIWU9yzOF3BDOLQMt8BtqG8AfR+XUceJ3qcGstb7SoE6FN5FfPk+GMuvFegcOHBNl9XcTRaTmKlP7EqZRp48pBMAAA/uC22FV6QJZQFj4Q/h3gwyZCzEw2+B6YrvvB+znbil/ndpbN9QqwyR2vgPDolPKPjh3sX/D/yg7AuVUTX+9R20V/Y53huh2JS/9onXNx2LvycpnaSV37tkouGn46HTU4r/GO/g1+czOm8AWSBMk3/G7yZETh4jcDLpaIiBOn00qYmKtz+LjZMaOVffdOhtZj8gYKmXca/j/1y8Qejv1zKtlcNZ+c2aAZW8CkIiKjeH922CUBBLwFo+1IYOtwtoVomXzKI4NvwJVbo5d/9T8N8ZMjyDx4/v+4RVkfs5dSfMNQOeLCiHu7OEoN2hABkMC/PEXOKQplXbfo3kl4mLpvLzKuWhpgHLaJzAp4Rl5Wzk4KND9p/sQS4l0tA2b5nUd6D6S0eMu7UGKMLggeyBnegKajIvbzn+53l/chMWsNJ+2Tf+whA25/SGIiW76XvRocoV3KrpCWdcde2U+2npw+OYXAxDnE1k514qNgs5TfwbQvnGYdkKnhYbCwRBUUBUuC+UAiX/amS7AS3+gMY2hMhoDGHwysqw1WPj2RfIGpndfRCtHBvVCk47vUU1OVwUYQlKKWZtFcfoqOWduXPbU1+Y5vFhPhuVH+6b3GUb0+WniQNm6061E1wURVuPa064DfGROxLpcxOYQsnGhTxh/kLeBUrtvGZmTN3BFMoMJA5uBjywBfXPosFiCc2WJG5ufvz29yuH3QeYsd7Ht66Ynh5Lm7zjikheqp17qV7fcuZ0ajx0CuwFYjubJ/g+V5xhZaj+aI12i3DfIB/IN39lkNxxDoBZ+kWoVN6nY71A01hrmYXn98N3V90TvXQxFy4IJbf0AP42nyX74fHFoEXg2TaQHoeQabNw38crS4OlurheY37aeb1I6LRh+Uw/q9bP7X6Kk4ACCMaQtTB69GJXmBru4BBoYR8XRUfRw1tyx2uvImfBvHcFBOeX6OBwyLHFBNeKX+4hc/w2TqY6oDvgXtaupC/fKlXRZwcFKE/ln2A47FND+1SKWKBF90CRbk9anNORivo1Xyt6PZxqmiw6kTICaiM2vlvobGyDMOU7KEo/1yTv3tDEEFI/dV1deyap30RTe5Ly9C86YyUOfkV+vuZ8bDhz0FWNSjKhLAWPqGA9Nh5U1t8S+i3gOdZ4i6KahCCfNm/br4iS/QvXqoT6ClYtxqGOmekEfGfuv30h0o+kZBcG0OmaSA1/QVItrC2mfFbW64D9UxxxUQeI542fXkuCsqOKnM6Td9irbjftmcf/AXmtfsVpWSVlXA8aQKSqfmpbWEMDjIc/58zT32Zy0jW39qFTr7LCVfvjZwUgIjUDgIEYrH3EFUpKvKc3mW/f6B5m7tEmDgRVTuEPJooUz8VppewY9d86yDk8Je5L7NYYKwCGglyiYyd5gAF2mSA/+Wwmm62Fz5k9iexe8+Hw6btwce1x1ULwadnq5QDkXLt0sgA/Q6CLuga3DWmCdpPmzhbbr7LEDmjN6F9EmY5aSyLdpCc+BJpX1a/SYl5nYj6TWP9qNDL5VluSjCqnDfM1727PObZp5aBeJ7JD41BoP/nOmDSCurScHoF0E5xQ4zyUNp0dNyIVpG9mP/tSt5OT+PBWw/1gelYc3sMAFD8YF3SIf4sfjipTZDTv5wOYsLV/ZTEB9U0HmacuWNE2jvZR+EWhpDx/ilwqRj9qW4Z2cJU8IU/MUC70ahfd/MxN80nPLcNYWmbTwtu6m+9qX5mpSayDpF/rpew5oz9KL3BuKFtbco1jdh7x8Z35iSOjpFzteaCvDhK0dFGtFVWT702vV7PjCg/HvtZg67Sga+WCUF/tPesmgyoCKDkEoEQ+keLOpaVy+bcBcAE6KYg2ooqGWOL+juSLExSldLQOsyfQcv7io6Xalgez11O/c/aDvrWo8Vr8ThvnkTWffQV6Dedx3KbYnPVgz+so1niiBSu+z+o9Uvs13HZLW6twyDxyTF3cbzYIi5fsVP4/A/MmimRt7pMmU2lPn5QogQBaZDG5XV59IpbOE4W16uRsYs1l8zH1PwmuhKPsWxgTv4cD38J5EfUt3ZwGSATEKSq5TJV0wMl5dOrp1CHDDu4C1vV5orNgbPWKNedpYz4GcVZ32p9zFKSq59cnVeNhVrphXcPErEs88hLnD/GT0T2QE9ek7mklBVfi7/JAYW5YEwmUUvYKsWFyfj+aUd/jFexYhlWrPA486zlN9RD8h9lRkCiYRu2JIgOBjWhdSG2qmqsPNrkTDYYMwHuCc/KHCj4T3bIxcJooWFAXKZlUz8537NQBXmyYylD7veEa9wKalfp9BmshQLr34Yv5b07y7lTwUImREGP902Or3m1biFhBduAvjHv9PjQipfESJ6YgtR2ti2gE0hj5nOWa/ixeZGBNtLR+dele8pmBhlBUt+LS+17smugu10qCDF2Ytj9Z7BsPTU+mIN6kJrnpoUOvlPy+JS4qHyxgmdVCS8a0J1LNXWZeUmggNjmUQlWJ75yBp9+cVyoS7s0lkuy6EaRKEr6q/IWhUaNd62xb7ONPJIxQjEBh42cKgZLkpAqpRiy3KpVUfHlkbalvvYoX9bzSFtiLGS0xkeG1TuaaUKKK1ykCadbdqFcSweEcqL7Uz+Tf4n/BGq6mgT8q6bMvnE7r5Sa/1iBYfvAXiclpMlmMZkwe9tpuGV+ydkp5lxc6g5/GJOgKqWb/KFT7PHNQflen2BbyXP6QlaoDC9kNkfyjuDMY707KK8OfOWlw8uDpv48HfGANLn5uRqMDnQMvjAlRbL865ygylWzNNumDVh8bQq9QAAAAA="
            alt=""
          />
        </div>
        <div className={styles.sidebar_item_inf}>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h3>
              <a href="">
                Pellentesque mattis arcu massa, nec fringilla turpis eleifend
                id.
              </a>
            </h3>
          </div>
          <div className={styles.date}>
            <span>7:00 AM</span> || <span>April 14</span>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_item}>
        <div className={styles.sidebar_item_img}>
          <img
            src="data:image/webp;base64,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"
            alt=""
          />
        </div>
        <div className={styles.sidebar_item_inf}>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h3>
              <a href="">
                Pellentesque mattis arcu massa, nec fringilla turpis eleifend
                id.
              </a>
            </h3>
          </div>
          <div className={styles.date}>
            <span>7:00 AM</span> || <span>April 14</span>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_item}>
        <div className={styles.sidebar_item_img}>
          <img
            src="data:image/webp;base64,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"
            alt=""
          />
        </div>
        <div className={styles.sidebar_item_inf}>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h3>
              <a href="">
                Pellentesque mattis arcu massa, nec fringilla turpis eleifend
                id.
              </a>
            </h3>
          </div>
          <div className={styles.date}>
            <span>7:00 AM</span> || <span>April 14</span>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_item}>
        <div className={styles.sidebar_item_img}>
          <img
            src="data:image/webp;base64,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"
            alt=""
          />
        </div>
        <div className={styles.sidebar_item_inf}>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h3>
              <a href="">
                Pellentesque mattis arcu massa, nec fringilla turpis eleifend
                id.
              </a>
            </h3>
          </div>
          <div className={styles.date}>
            <span>7:00 AM</span> || <span>April 14</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
