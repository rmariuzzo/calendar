<script lang="ts">
  import pkg from '../../package.json'
</script>

<div class="footer">
  v{pkg.version} •
  <a href="https://github.com/rmariuzzo" target="_blank" rel="noopener noreferrer">
    @rmariuzzo
  </a>
</div>

<style>
  .footer {
    text-align: center;
    padding-top: var(--unit);
    height: 40px;
    font-size: var(--font-size-small);
    text-transform: uppercase;
    font-weight: var(--font-weight-bold);
    color: color-mix(in srgb, #fff 50%, #474b5c);
  }

  .footer a {
    color: color-mix(in srgb, #fff 50%, #474b5c);
  }
</style>
