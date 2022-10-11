import React from 'react'

function Pricing() {
  return (
    <div>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle show"
          data-bs-toggle="dropdown"
          href="button"
          role="button"
          aria-haspopup="true"
          aria-expanded="true"
        >
        Pricings
        </a>
        <div class="dropdown-menu show" data-bs-popper="none">
          <a class="dropdown-item" href="50">
            50
          </a>
          <a class="dropdown-item" href="10">
            10
          </a>
          <a class="dropdown-item" href="15">
            15
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="30">
        30
          </a>
        </div>
      </li>
    </div>
  );
}

export default Pricing