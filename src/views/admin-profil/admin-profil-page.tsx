"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/shared/ui/icon";
import {
  AdminProfilService,
  type AdminOfficialItem,
} from "@/entities/admin/api/admin-profil.service";
import { FileUploadWithPreview } from "@/shared/ui/file-upload-with-preview";
import { FallbackImage } from "@/shared/ui/fallback-image";

export function AdminProfilPage() {
  const [activeTab, setActiveTab] = useState<
    "PROFIL" | "OFFICIALS" | "STRUCTURE"
  >("PROFIL");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State Profil & Visi Misi
  const [headName, setHeadName] = useState("");
  const [headPosition, setHeadPosition] = useState("");
  const [headPhoto, setHeadPhoto] = useState("");
  const [headGreeting, setHeadGreeting] = useState("");
  const [historyText, setHistoryText] = useState("");
  const [vision, setVision] = useState("");
  const [missions, setMissions] = useState<string[]>([]);
  const [structureImageUrl, setStructureImageUrl] = useState("");

  // Form State Officials
  const [officials, setOfficials] = useState<AdminOfficialItem[]>([]);
  const [isOfficialModalOpen, setIsOfficialModalOpen] = useState(false);
  const [editingOfficialId, setEditingOfficialId] = useState<string | null>(
    null,
  );
  const [officialName, setOfficialName] = useState("");
  const [officialPosition, setOfficialPosition] = useState("");
  const [officialPhotoUrl, setOfficialPhotoUrl] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [officialGreeting, setOfficialGreeting] = useState("");
  const [isSavingOfficial, setIsSavingOfficial] = useState(false);

  const loadData = () => {
    setIsLoading(true);
    AdminProfilService.getProfil()
      .then((data) => {
        setHeadName(data.headName || "");
        setHeadPosition(data.headPosition || "");
        setHeadPhoto(data.headPhoto || "");
        setHeadGreeting(data.headGreeting || "");
        setHistoryText(data.historyText || "");
        setVision(data.vision || "");
        setMissions(data.missions || []);
        setStructureImageUrl(data.structureImageUrl || "");
        setOfficials(data.officials || []);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    let ignore = false;
    AdminProfilService.getProfil()
      .then((data) => {
        if (!ignore) {
          setHeadName(data.headName || "");
          setHeadPosition(data.headPosition || "");
          setHeadPhoto(data.headPhoto || "");
          setHeadGreeting(data.headGreeting || "");
          setHistoryText(data.historyText || "");
          setVision(data.vision || "");
          setMissions(data.missions || []);
          setStructureImageUrl(data.structureImageUrl || "");
          setOfficials(data.officials || []);
        }
      })
      .finally(() => {
        if (!ignore) setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Handlers Misi Dinamis
  const handleAddMission = () => {
    setMissions([...missions, ""]);
  };

  const handleUpdateMission = (index: number, val: string) => {
    const next = [...missions];
    next[index] = val;
    setMissions(next);
  };

  const handleRemoveMission = (index: number) => {
    setMissions(missions.filter((_, i) => i !== index));
  };

  // Save Profil & Visi Misi
  const handleSaveProfil = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await AdminProfilService.updateProfil({
        headName,
        headPosition,
        headPhoto,
        headGreeting,
        historyText,
        vision,
        missions,
        structureImageUrl,
      });
      showToast("Profil desa & Visi Misi berhasil diperbarui.");
    } catch (err) {
      console.error("Gagal menyimpan profil desa:", err);
    } finally {
      setIsSaving(false);
    }
  };

  // Official Modal Handlers
  const openAddOfficialModal = () => {
    setEditingOfficialId(null);
    setOfficialName("");
    setOfficialPosition("");
    setOfficialPhotoUrl("");
    setOfficialEmail("");
    setOfficialGreeting("");
    setIsOfficialModalOpen(true);
  };

  const openEditOfficialModal = (item: AdminOfficialItem) => {
    setEditingOfficialId(item.id);
    setOfficialName(item.name);
    setOfficialPosition(item.position);
    setOfficialPhotoUrl(item.photoUrl);
    setOfficialEmail(item.email || "");
    setOfficialGreeting(item.greeting || "");
    setIsOfficialModalOpen(true);
  };

  const handleSaveOfficial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSavingOfficial) return;
    setIsSavingOfficial(true);

    try {
      const payload = {
        name: officialName,
        position: officialPosition,
        photoUrl:
          officialPhotoUrl ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        email: officialEmail,
        greeting: officialGreeting,
      };

      if (editingOfficialId) {
        await AdminProfilService.updateOfficial(editingOfficialId, payload);
        showToast(`Perangkat desa "${officialName}" berhasil diperbarui.`);
      } else {
        await AdminProfilService.addOfficial(payload);
        showToast(`Perangkat desa baru "${officialName}" berhasil ditambahkan.`);
      }

      setIsOfficialModalOpen(false);
      loadData();
    } catch (err) {
      console.error("Gagal menyimpan perangkat desa:", err);
      alert("Terjadi kesalahan saat menyimpan perangkat desa.");
    } finally {
      setIsSavingOfficial(false);
    }
  };

  const handleDeleteOfficial = async (id: string, name: string) => {
    if (
      confirm(
        `Apakah Anda yakin ingin menghapus data perangkat desa "${name}"?`,
      )
    ) {
      await AdminProfilService.deleteOfficial(id);
      showToast(`Data perangkat desa "${name}" telah dihapus.`);
      loadData();
    }
  };

  return (
    <div className="space-y-8">
      {toastMessage && (
        <div className="bg-primary text-on-primary animate-fade-in fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-2xl px-6 py-4 text-sm font-semibold shadow-2xl">
          <Icon name="check_circle" className="text-xl" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Halaman */}
      <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-on-surface-variant font-label-sm text-xs font-bold tracking-wider uppercase">
            Manajemen Informasi Desa
          </span>
          <h2 className="font-headline-lg text-primary mt-1 text-3xl font-bold">
            Kelola Profil, Visi Misi & Perangkat Desa
          </h2>
          <p className="text-on-surface-variant mt-1 text-sm">
            Sunting sambutan Kepala Desa, sejarah, visi misi, data pamong
            perangkat desa, dan diagram bagan struktur organisasi.
          </p>
        </div>

        {activeTab === "PROFIL" || activeTab === "STRUCTURE" ? (
          <button
            onClick={handleSaveProfil}
            disabled={isSaving || isLoading}
            className="bg-primary text-on-primary hover:bg-primary/90 flex items-center gap-2 self-start rounded-2xl px-6 py-3.5 text-xs font-bold shadow-md transition sm:self-auto"
          >
            {isSaving ? (
              <>
                <Icon name="sync" className="animate-spin text-xl" />{" "}
                Menyimpan...
              </>
            ) : (
              <>
                <Icon name="save" className="text-xl" /> Simpan Perubahan Profil
              </>
            )}
          </button>
        ) : (
          <button
            onClick={openAddOfficialModal}
            className="bg-primary text-on-primary hover:bg-primary/90 inline-flex items-center gap-2 self-start rounded-2xl px-6 py-3.5 text-xs font-bold shadow-md transition sm:self-auto"
          >
            <Icon name="person_add" className="text-xl" /> Tambah Perangkat Desa
            Baru
          </button>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-surface-container-low border-outline-variant/30 flex w-fit items-center gap-2 rounded-2xl border p-1.5">
        <button
          onClick={() => setActiveTab("PROFIL")}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition ${
            activeTab === "PROFIL"
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
        >
          <Icon name="assignment_ind" className="text-lg" />
          Sambutan Kades & Visi Misi
        </button>

        <button
          onClick={() => setActiveTab("OFFICIALS")}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition ${
            activeTab === "OFFICIALS"
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
        >
          <Icon name="groups" className="text-lg" />
          Perangkat & Pamong Desa ({officials.length})
        </button>

        <button
          onClick={() => setActiveTab("STRUCTURE")}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition ${
            activeTab === "STRUCTURE"
              ? "bg-primary text-on-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
        >
          <Icon name="schema" className="text-lg" />
          Bagan Struktur Organisasi
        </button>
      </div>

      {/* TAB 1: PROFIL UTAMA & VISI MISI */}
      {activeTab === "PROFIL" && (
        <form onSubmit={handleSaveProfil} className="space-y-8">
          {/* Seksi Sambutan & Foto Kepala Desa */}
          <div className="border-outline-variant/30 bg-surface-container-lowest space-y-6 rounded-3xl border p-8 shadow-sm">
            <div className="border-b pb-4">
              <h3 className="font-headline-md text-primary flex items-center gap-2 text-lg font-bold">
                <Icon name="record_voice_over" className="text-xl" /> Sambutan &
                Foto Kepala Desa
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                  Nama Kepala Desa
                </label>
                <input
                  type="text"
                  required
                  value={headName}
                  onChange={(e) => setHeadName(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-bold outline-none"
                  placeholder="Ki Suryo Pringgo"
                />
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                  Jabatan Resmiku
                </label>
                <input
                  type="text"
                  required
                  value={headPosition}
                  onChange={(e) => setHeadPosition(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
                  placeholder="Kepala Desa Pringgodani"
                />
              </div>
            </div>

            <FileUploadWithPreview
              label="Unggah Foto Resmi Kepala Desa"
              value={headPhoto}
              onChange={(url) => setHeadPhoto(url)}
              helperText="Foto resmi Kepala Desa Pringgodani untuk halaman profil & sejarah."
              aspectRatio="square"
            />

            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Teks Sambutan Kepala Desa
              </label>
              <textarea
                rows={4}
                required
                value={headGreeting}
                onChange={(e) => setHeadGreeting(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm leading-relaxed outline-none"
                placeholder="Tuliskan kata sambutan Kepala Desa kepada warga dan pengunjung..."
              />
            </div>
          </div>

          {/* Seksi Sejarah Desa */}
          <div className="border-outline-variant/30 bg-surface-container-lowest space-y-6 rounded-3xl border p-8 shadow-sm">
            <div className="border-b pb-4">
              <h3 className="font-headline-md text-primary flex items-center gap-2 text-lg font-bold">
                <Icon name="history_edu" className="text-xl" /> Teks Sejarah
                Desa Pringgodani
              </h3>
            </div>

            <div>
              <textarea
                rows={5}
                required
                value={historyText}
                onChange={(e) => setHistoryText(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm leading-relaxed outline-none"
                placeholder="Ceritakan asal-usul dan sejarah perkembangan Desa Pringgodani..."
              />
            </div>
          </div>

          {/* Seksi Visi & Misi Desa */}
          <div className="border-outline-variant/30 bg-surface-container-lowest space-y-6 rounded-3xl border p-8 shadow-sm">
            <div className="border-b pb-4">
              <h3 className="font-headline-md text-primary flex items-center gap-2 text-lg font-bold">
                <Icon name="flag" className="text-xl" /> Visi & Misi Desa
              </h3>
            </div>

            <div>
              <label className="font-label-sm text-on-surface-variant mb-2 block text-xs font-bold uppercase">
                Visi Pembangunan Desa
              </label>
              <textarea
                rows={2}
                required
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm leading-relaxed font-bold outline-none"
                placeholder="Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera..."
              />
            </div>

            <div className="space-y-3 border-t pt-4">
              <div className="flex items-center justify-between">
                <label className="font-label-sm text-on-surface-variant text-xs font-bold uppercase">
                  Daftar Misi Desa
                </label>
                <button
                  type="button"
                  onClick={handleAddMission}
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition"
                >
                  <Icon name="add" className="text-sm" /> Tambah Misi
                </button>
              </div>

              {missions.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-primary w-6 text-right font-mono text-xs font-bold">
                    {idx + 1}.
                  </span>
                  <input
                    type="text"
                    value={m}
                    onChange={(e) => handleUpdateMission(idx, e.target.value)}
                    placeholder="Misi pembangunan desa..."
                    className="bg-surface border-outline-variant text-on-surface focus:border-primary flex-1 rounded-2xl border p-3 text-sm outline-none"
                  />
                  {missions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMission(idx)}
                      className="text-error hover:bg-error/10 rounded-xl p-2 text-xs font-bold"
                    >
                      <Icon name="delete" className="text-lg" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
      )}

      {/* TAB 2: KELOLA PERANGKAT & PAMONG DESA */}
      {activeTab === "OFFICIALS" && (
        <div className="border-outline-variant/30 bg-surface-container-lowest overflow-hidden rounded-3xl border shadow-sm">
          {officials.length === 0 ? (
            <div className="text-on-surface-variant space-y-2 py-12 text-center text-sm font-medium">
              <Icon
                name="groups"
                className="text-primary/40 mx-auto text-4xl"
              />
              <p>Belum ada data perangkat desa yang ditambahkan.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-highest text-on-surface-variant border-b text-xs font-bold uppercase">
                  <tr>
                    <th className="px-6 py-4">Foto & Nama Perangkat</th>
                    <th className="px-6 py-4">Jabatan Resmiku</th>
                    <th className="px-6 py-4">Email / Kontak</th>
                    <th className="px-6 py-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-outline-variant/20 divide-y">
                  {officials.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-surface-container-low transition"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="border-outline-variant bg-surface-container h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                            <FallbackImage
                              src={item.photoUrl}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-primary text-base font-bold">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 text-xs font-bold">
                          {item.position}
                        </span>
                      </td>
                      <td className="text-on-surface-variant px-6 py-4 font-mono text-xs whitespace-nowrap">
                        {item.email || "-"}
                      </td>
                      <td className="space-x-2 px-6 py-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => openEditOfficialModal(item)}
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary rounded-xl px-3 py-1.5 text-xs font-bold transition"
                        >
                          Sunting
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteOfficial(item.id, item.name)
                          }
                          className="bg-error/10 text-error hover:bg-error hover:text-on-error rounded-xl px-3 py-1.5 text-xs font-bold transition"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: BAGAN STRUKTUR ORGANISASI DESA */}
      {activeTab === "STRUCTURE" && (
        <div className="border-outline-variant/30 bg-surface-container-lowest space-y-6 rounded-3xl border p-8 shadow-sm">
          <div className="border-b pb-4">
            <h3 className="font-headline-md text-primary flex items-center gap-2 text-lg font-bold">
              <Icon name="schema" className="text-xl" /> Diagram Bagan Struktur
              Organisasi Desa
            </h3>
            <p className="text-on-surface-variant mt-1 text-xs">
              Unggah berkas gambar diagram alur / bagan struktur tata kelola
              pemerintahan Desa Pringgodani.
            </p>
          </div>

          <FileUploadWithPreview
            label="Unggah Berkas Gambar Bagan Struktur Organisasi"
            value={structureImageUrl}
            onChange={(url) => setStructureImageUrl(url)}
            helperText="File diagram (.png, .jpg, .webp) resolusi tinggi."
            aspectRatio="banner"
          />

          {structureImageUrl && (
            <div className="space-y-2 border-t pt-6">
              <p className="text-primary text-xs font-bold uppercase">
                Pratinjau Tampilan Bagan Struktur Publik:
              </p>
              <div className="border-outline-variant bg-surface-container relative aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-md">
                <FallbackImage
                  src={structureImageUrl}
                  alt="Struktur Organisasi Desa Pringgodani"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal Form Tambah / Edit Perangkat Desa */}
      {isOfficialModalOpen && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="border-outline-variant/30 bg-surface-container-lowest text-on-surface w-full max-w-lg space-y-6 rounded-[2.5rem] border p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="font-headline-md text-primary text-xl font-bold">
                {editingOfficialId
                  ? "Sunting Data Perangkat Desa"
                  : "Tambah Perangkat Desa Baru"}
              </h3>
              <button
                onClick={() => setIsOfficialModalOpen(false)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <Icon name="close" className="text-xl" />
              </button>
            </div>

            <form onSubmit={handleSaveOfficial} className="space-y-4">
              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Nama Lengkap Perangkat (Wajib)
                </label>
                <input
                  type="text"
                  required
                  value={officialName}
                  onChange={(e) => setOfficialName(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-bold outline-none"
                  placeholder="Siti Handayani"
                />
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Jabatan Resmiku (Wajib)
                </label>
                <input
                  type="text"
                  required
                  value={officialPosition}
                  onChange={(e) => setOfficialPosition(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm font-semibold outline-none"
                  placeholder="Sekretaris Desa / Kaur Keuangan / Kasie Pelayanan"
                />
              </div>

              <FileUploadWithPreview
                label="Unggah Foto Profil Perangkat Desa"
                value={officialPhotoUrl}
                onChange={(url) => setOfficialPhotoUrl(url)}
                helperText="Foto resmi perangkat desa (format pasfoto)."
                aspectRatio="square"
              />

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Email Pelayanan (Opsional)
                </label>
                <input
                  type="email"
                  value={officialEmail}
                  onChange={(e) => setOfficialEmail(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 font-mono text-sm outline-none"
                  placeholder="sekdes@pringgodani.desa.id"
                />
              </div>

              <div>
                <label className="font-label-sm text-on-surface-variant mb-1 block text-xs font-bold uppercase">
                  Quotes / Kata Mutiara (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={officialGreeting}
                  onChange={(e) => setOfficialGreeting(e.target.value)}
                  className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border p-3.5 text-sm outline-none"
                  placeholder="Melayani dengan integritas dan keikhlasan."
                />
              </div>

              <div className="flex justify-end gap-3 border-t pt-4">
                <button
                  type="button"
                  disabled={isSavingOfficial}
                  onClick={() => setIsOfficialModalOpen(false)}
                  className="bg-surface border-outline-variant text-on-surface rounded-2xl border px-5 py-3 text-xs font-bold disabled:opacity-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSavingOfficial}
                  className="bg-primary text-on-primary hover:bg-primary/90 flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-bold shadow-md transition disabled:opacity-50"
                >
                  {isSavingOfficial ? (
                    <>
                      <Icon name="sync" className="animate-spin text-base" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>Simpan Perangkat Desa</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
