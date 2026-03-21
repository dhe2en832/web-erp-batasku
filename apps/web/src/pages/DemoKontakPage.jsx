import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lock, User, Calendar, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function DemoKontakPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    perusahaan: '',
    pesan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track demo page view
  useEffect(() => {
    if (window.analytics) {
      window.analytics.trackEvent('demo_page_view', {
        page_title: 'Demo & Kontak',
        page_location: window.location.href
      });
    }
  }, []);

  const handleChange = (e) => {
    // Track field interaction
    if (window.analytics && e.target.name) {
      window.analytics.trackEvent('demo_field_interaction', {
        field_name: e.target.name,
        field_type: e.target.type || 'text',
        has_value: e.target.value.length > 0
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission attempt
    if (window.analytics) {
      window.analytics.trackEvent('demo_form_submit_attempt', {
        form_name: 'Demo Request Form',
        company_name: formData.perusahaan || 'Not provided'
      });
    }

    // Validate form
    if (!formData.nama || !formData.email || !formData.telepon || !formData.perusahaan) {
      // Track validation error
      if (window.analytics) {
        window.analytics.trackEvent('demo_form_validation_error', {
          missing_fields: getMissingFields(formData)
        });
      }

      toast({
        title: "Form tidak lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('demoRequests') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    submissions.push(newSubmission);
    localStorage.setItem('demoRequests', JSON.stringify(submissions));

    // Track successful form submission
    if (window.analytics) {
      window.analytics.trackEvent('demo_form_submit_success', {
        form_name: 'Demo Request Form',
        company_name: formData.perusahaan,
        contact_method: 'Demo Request',
        timestamp: new Date().toISOString()
      });
    }

    // Show success message
    toast({
      title: "Permintaan demo terkirim",
      description: "Tim kami akan menghubungi Anda dalam 1-2 hari kerja."
    });

    // Reset form
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      perusahaan: '',
      pesan: ''
    });
    setIsSubmitting(false);
  };

  // Helper function to identify missing fields
  const getMissingFields = (data) => {
    const required = ['nama', 'email', 'telepon', 'perusahaan'];
    return required.filter(field => !data[field]);
  };

  // Helper function to check if form is filled
  const isFormFilled = (data) => {
    const required = ['nama', 'email', 'telepon', 'perusahaan'];
    return required.every(field => data[field] && data[field].trim().length > 0);
  };

  const timelineSteps = [
    {
      week: 'Minggu 1-2',
      title: 'Persiapan',
      description: 'Analisis kebutuhan, setup infrastruktur, dan persiapan data'
    },
    {
      week: 'Minggu 3-4',
      title: 'Konfigurasi Sistem',
      description: 'Setup modul, konfigurasi master data, dan pengaturan user access'
    },
    {
      week: 'Minggu 5-6',
      title: 'Customization',
      description: 'Penyesuaian fitur sesuai kebutuhan bisnis dan integrasi sistem'
    },
    {
      week: 'Minggu 7-8',
      title: 'Training & Go Live',
      description: 'Pelatihan user, testing, dan peluncuran sistem secara resmi'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo & Kontak - Sistem ERP Terintegrasi</title>
        <meta name="description" content="Coba demo sistem ERP kami atau hubungi tim untuk konsultasi. Estimasi implementasi 8 minggu dengan support penuh." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="mb-6">Demo & Kontak</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Coba sistem kami secara langsung atau hubungi tim untuk konsultasi dan penawaran khusus.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Demo Access Section */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="mb-4">Akses Demo Sistem</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Coba langsung fitur-fitur sistem ERP kami dengan akses demo berikut
                  </p>
                </div>

                <Card className="max-w-3xl mx-auto shadow-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl">Demo System Access</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Gunakan kredensial berikut untuk mengakses sistem demo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 px-8 pb-8">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-card border">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 mx-auto sm:mx-0">
                          <Lock className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <p className="text-sm font-medium text-muted-foreground">URL</p>
                          <a 
                            href="https://erp.batasku.cloud" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-primary hover:underline break-all"
                          >
                            https://erp.batasku.cloud
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-card border">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 mx-auto sm:mx-0">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <p className="text-sm font-medium text-muted-foreground">Username</p>
                          <p className="text-lg font-semibold">Administrator</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-xl bg-card border">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 mx-auto sm:mx-0">
                          <Lock className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <p className="text-sm font-medium text-muted-foreground">Password</p>
                          <p className="text-lg font-semibold font-mono break-all">Admin@12345</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-muted">
                      <p className="text-sm text-muted-foreground text-center">
                        <strong>Catatan:</strong> Sistem demo direset setiap 24 jam. Data yang Anda input tidak akan tersimpan permanen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="mb-4">Hubungi Kami</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Jika Anda memiliki pertanyaan atau ingin mendiskusikan kebutuhan bisnis Anda, hubungi tim kami melalui kontak berikut
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {/* Email Card */}
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                          <Mail className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Email</h3>
                      <a 
                        href="mailto:vespahitam65@gmail.com"
                        className="text-primary hover:underline font-medium break-all"
                      >
                        vespahitam65@gmail.com
                      </a>
                    </CardContent>
                  </Card>

                  {/* Phone Card */}
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                          <Phone className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Telepon</h3>
                      <a 
                        href="tel:+6281239761063"
                        className="text-primary hover:underline font-medium"
                      >
                        +62 812-3976-1063
                      </a>
                    </CardContent>
                  </Card>

                  {/* Location Card */}
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                          <MapPin className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">Lokasi</h3>
                      <p className="text-muted-foreground font-medium">Bandung, Indonesia</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">Request Demo Pribadi</CardTitle>
                      <CardDescription>
                        Isi form berikut dan tim kami akan menghubungi Anda untuk demo yang disesuaikan dengan kebutuhan bisnis Anda
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="nama" className="text-sm font-medium">
                            Nama Lengkap <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="nama"
                            name="nama"
                            type="text"
                            value={formData.nama}
                            onChange={handleChange}
                            required
                            className="bg-background text-foreground"
                            placeholder="Masukkan nama lengkap Anda"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-background text-foreground"
                            placeholder="nama@perusahaan.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telepon" className="text-sm font-medium">
                            Nomor Telepon <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="telepon"
                            name="telepon"
                            type="tel"
                            value={formData.telepon}
                            onChange={handleChange}
                            required
                            className="bg-background text-foreground"
                            placeholder="+62 812 3456 7890"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="perusahaan" className="text-sm font-medium">
                            Nama Perusahaan <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="perusahaan"
                            name="perusahaan"
                            type="text"
                            value={formData.perusahaan}
                            onChange={handleChange}
                            required
                            className="bg-background text-foreground"
                            placeholder="PT. Nama Perusahaan"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="pesan" className="text-sm font-medium">
                            Pesan (Opsional)
                          </Label>
                          <Textarea
                            id="pesan"
                            name="pesan"
                            value={formData.pesan}
                            onChange={handleChange}
                            rows={4}
                            className="bg-background text-foreground resize-none"
                            placeholder="Ceritakan kebutuhan bisnis Anda..."
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full transition-all duration-200 active:scale-[0.98]"
                          disabled={isSubmitting}
                          onClick={() => {
                            if (window.analytics) {
                              window.analytics.trackEvent('demo_submit_button_click', {
                                button_text: 'Kirim Permintaan Demo',
                                form_filled: isFormFilled(formData)
                              });
                            }
                          }}
                        >
                          {isSubmitting ? 'Mengirim...' : 'Kirim Permintaan Demo'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Implementation Timeline */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Timeline Implementasi</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Estimasi waktu implementasi sistem adalah <strong>8 minggu</strong> dari kick-off hingga Go Live, dengan tahapan sebagai berikut:
                      </p>
                    </div>

                    <div className="space-y-6">
                      {timelineSteps.map((step, index) => (
                        <Card key={index} className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-md">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                {index === timelineSteps.length - 1 ? (
                                  <CheckCircle2 className="h-6 w-6 text-primary" />
                                ) : (
                                  <Calendar className="h-6 w-6 text-primary" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    {step.week}
                                  </span>
                                </div>
                                <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong>Catatan:</strong> Timeline dapat disesuaikan berdasarkan kompleksitas kebutuhan dan kesiapan data perusahaan Anda. Tim kami akan bekerja sama dengan Anda untuk memastikan implementasi berjalan lancar.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default DemoKontakPage;