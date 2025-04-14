function FeatureGrid() {
  const features = [
  { id: 1, name: "Edukasi", icon: "fas fa-graduation-cap" },
  { id: 2, name: "Transportasi", icon: "fas fa-car" },
  { id: 3, name: "Sosial", icon: "fas fa-users" },
  { id: 4, name: "Rumah Tangga", icon: "fas fa-home" },
  { id: 5, name: "Gaming", icon: "fas fa-gamepad" },
  { id: 6, name: "Teknologi", icon: "fas fa-microchip" },
  { id: 7, name: "Kesehatan", icon: "fas fa-heartbeat" },
  { id: 8, name: "Kesenian", icon: "fas fa-palette" },
  { id: 9, name: "Keuangan", icon: "fas fa-wallet" },
  { id: 10, name: "Pekerjaan", icon: "fas fa-briefcase" },
  { id: 11, name: "Keterampilan Praktis", icon: "fas fa-tools" },
  { id: 12, name: "Tugas di Sekitar", icon: "fas fa-ellipsis-v" }];


  return (
    <div data-id="jhwr53lb2" data-path="components/FeatureGrid.js">
      <h2 className="text-lg font-semibold mb-4" data-id="8wjqwjzfx" data-path="components/FeatureGrid.js">Layanan Utama</h2>
      <div className="features-grid" data-id="avtbbj2hs" data-path="components/FeatureGrid.js">
        {features.map((feature) =>
        <div key={feature.id} className="feature-item" data-id="cimex6ggl" data-path="components/FeatureGrid.js">
            <div className="feature-icon" data-id="bu3zwpv2d" data-path="components/FeatureGrid.js">
              <i className={feature.icon} data-id="29igdeaf9" data-path="components/FeatureGrid.js"></i>
            </div>
            <span className="feature-name" data-id="lfejr729a" data-path="components/FeatureGrid.js">{feature.name}</span>
          </div>
        )}
      </div>
    </div>);

}