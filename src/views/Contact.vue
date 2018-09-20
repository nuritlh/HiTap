<template>
  <div class="contact container">
    <h4 class="text-center">Contact</h4>
    <div class="d-flex flex-row justify-content-around flex-wrap contact-details">
      <div>
        <h5>Main office</h5>
        <p>53 Herzel St.</p>
        <p>Zichron Yaacov 30900, ISRAEL</p>
        <p>Tal +  972 46 399803</p>
        <p>Fax +  972 46 399823</p>
      </div>
      <div>
        <p><span class="font-weight-bold"> Management :</span>adar@n-adar.com</p>
        <p><span class="font-weight-bold"> R&D :</span>eitan@n-adar.com</p>
        <p><span class="font-weight-bold"> Legal :</span>tamir@n-adar.com</p>
        <p><span class="font-weight-bold"> Business admin :</span>michal@n-adar.com</p>
      </div>
    </div>
  </div>
</template>
<style scoped >
.contact {
  color: #0e5984 !important;
}

@media screen and (max-width: 700px) {
  .contact-details {
    justify-content: end !important;
  }
}
</style>