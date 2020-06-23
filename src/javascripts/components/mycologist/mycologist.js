const mycologistMaker = (mycologist) => {
  const domString = `
    <div class="col-3">
      <div class="card myco-card border-0 rounded-0" id=${mycologist.id}>
        <div class="card-header">${mycologist.name}</div>
        <div class="card-body">
          <h5 class="card-title">Age: ${mycologist.age}</h5>
          <p class="card-text">A mycologist.</p>
        </div>
      </div>
    </div>
  `;
  return domString;
};

export default {
  mycologistMaker,
};
