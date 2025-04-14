function Announcement() {
  const announcements = [
  {
    id: 1,
    icon: "fas fa-bullhorn",
    title: "Pengumuman",
    content: "Si Jalu sedang dalam tahap pengembangan. Beberapa fitur mungkin belum tersedia atau masih dalam pengujian. Terima kasih atas kesabaran Anda."
  },
  {
    id: 2,
    icon: "fas fa-clock",
    title: "Coming soon",
    content: "Coming soon"
  },
  {
    id: 3,
    icon: "fas fa-rocket",
    title: "Coming soon",
    content: "Coming soon"
  }];


  return (
    <div className="announcements-container" data-id="9k1s52f7x" data-path="components/Announcement.js">
      {announcements.map((announcement) =>
      <div key={announcement.id} className="announcement" data-id="dzi5rqf7x" data-path="components/Announcement.js">
          <div className="announcement-title" data-id="odrwxq35t" data-path="components/Announcement.js">
            <i className={announcement.icon} data-id="2sw41szn9" data-path="components/Announcement.js"></i>
            <span data-id="0lz1ny75g" data-path="components/Announcement.js">{announcement.title}</span>
          </div>
          <div className="announcement-content" data-id="t5z5y7ni8" data-path="components/Announcement.js">
            {announcement.content}
          </div>
        </div>
      )}
    </div>);

}