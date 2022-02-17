<h2><slot /></h2>

<style>
  h2 {
    margin: 2rem 0 2rem 0;
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
  }

  h2::after {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 200px;
    margin: 1.5rem auto 2rem;
    border-radius: 2px;
  }

  /* @media only screen and (min-width: 30em) {
    h2 {
      margin: 3rem 0 1rem 0;
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 50em) {
    h2 {
      margin: 1.5rem 0 1rem 0;
      font-size: 2rem;
    }
  } */
</style>
