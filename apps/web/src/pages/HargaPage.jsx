import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Headphones, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingCard from '@/components/PricingCard.jsx';
import FeatureList from '@/components/FeatureList.jsx';

function HargaPage() {
  const packages = [
    {
      name: 'PAKET BASIC',
      price: 'Rp 20.000.000',
      features: [
        'Modul Manajemen Keuangan lengkap',
        'Modul Manajemen Pembelian',
        'Modul Manajemen Penjualan',
        'Modul Manajemen Inventori',
        'Support instalasi dan konfigurasi',
        'Training dasar untuk 5 user',
        'Dokumentasi lengkap'
      ],
      isPopular: false
    },
    {
      name: 'PAKET PROFESSIONAL',
      price: 'Rp 25.000.000',
      features: [
        'Semua fitur Paket Basic',
        'Customization sesuai kebutuhan bisnis',
        'Integrasi dengan sistem existing',
        'Training lanjutan untuk 10 user',
        'Priority support 3 bulan',
        'Laporan custom sesuai kebutuhan',
        'Multi-company support'
      ],
      isPopular: true
    },
    {
      name: 'PAKET ENTERPRISE',
      price: 'Rp 45.000.000',
      features: [
        'Semua fitur Paket Professional',
        'Unlimited customization',
        'Dedicated project manager',
        'Training unlimited user',
        'Priority support 12 bulan',
        'Advanced reporting & analytics',
        'API integration support',
        'On-premise deployment option'
      ],
      isPopular: false
    }
  ];

  const salesAppFeatures = [
    'Aplikasi mobile untuk sales team',
    'Akses data customer dan produk offline',
    'Input sales order di lapangan',
    'GPS tracking kunjungan customer',
    'Sinkronisasi otomatis dengan sistem utama',
    'Dashboard performa sales real-time'
  ];

  const vpsOptions = [
    {
      name: 'VPS Starter',
      specs: '2 vCPU, 4GB RAM, 80GB SSD',
      price: 'Rp 500.000/bulan'
    },
    {
      name: 'VPS Business',
      specs: '4 vCPU, 8GB RAM, 160GB SSD',
      price: 'Rp 1.000.000/bulan'
    },
    {
      name: 'VPS Enterprise',
      specs: '8 vCPU, 16GB RAM, 320GB SSD',
      price: 'Rp 2.000.000/bulan'
    }
  ];

  const supportOptions = [
    {
      name: 'Basic Support',
      features: ['Email support', 'Response time 48 jam', 'Bug fixes'],
      price: 'Rp 2.000.000/tahun'
    },
    {
      name: 'Professional Support',
      features: ['Email & phone support', 'Response time 24 jam', 'Bug fixes & updates', 'Remote assistance'],
      price: 'Rp 5.000.000/tahun'
    },
    {
      name: 'Enterprise Support',
      features: ['24/7 support', 'Response time 4 jam', 'Bug fixes & updates', 'On-site support', 'Dedicated support engineer'],
      price: 'Rp 12.000.000/tahun'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Harga & Paket - Sistem ERP Terintegrasi</title>
        <meta name="description" content="Pilih paket ERP yang sesuai dengan kebutuhan bisnis Anda. Mulai dari Rp 20 juta dengan fitur lengkap dan support profesional." />
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
                <h1 className="mb-6">Paket Harga</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Pilih paket yang sesuai dengan skala dan kebutuhan bisnis Anda. Semua paket sudah termasuk implementasi dan training.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main Packages */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PricingCard {...pkg} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sales App Add-on */}
          <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="mb-4">Add-On: Sales App Android</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Tingkatkan produktivitas tim sales dengan aplikasi mobile khusus
                  </p>
                </div>

                <Card className="max-w-4xl mx-auto shadow-lg">
                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                        <Smartphone className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl mb-2">Sales App Android</CardTitle>
                    <div className="text-4xl font-bold text-primary mt-4">Rp 12.000.000</div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <FeatureList features={salesAppFeatures} columns={2} />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* VPS Hosting */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="mb-4">VPS Hosting Options</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Pilih spesifikasi server yang sesuai dengan volume transaksi bisnis Anda
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {vpsOptions.map((vps, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="text-center">
                          <div className="flex justify-center mb-4">
                            <Server className="h-12 w-12 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{vps.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                          <p className="text-sm text-muted-foreground">{vps.specs}</p>
                          <p className="text-2xl font-bold text-primary">{vps.price}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Support & Maintenance */}
          <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="mb-4">Support & Maintenance</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Pastikan sistem Anda selalu berjalan optimal dengan paket support kami
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {supportOptions.map((support, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="text-center">
                          <div className="flex justify-center mb-4">
                            <Headphones className="h-12 w-12 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{support.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                          <div className="flex-1 mb-6">
                            <FeatureList features={support.features} />
                          </div>
                          <p className="text-2xl font-bold text-primary text-center">{support.price}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Syarat Pembayaran</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-semibold">Down Payment 50%</p>
                        <p className="text-sm text-muted-foreground">Dibayarkan sebelum proses implementasi dimulai</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-semibold">Pelunasan 50%</p>
                        <p className="text-sm text-muted-foreground">Dibayarkan setelah sistem Go Live dan diterima oleh klien</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="mb-6 text-primary-foreground">Butuh Penawaran Khusus?</h2>
                <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                  Hubungi tim kami untuk mendapatkan penawaran yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
                </p>
                <Button asChild size="lg" variant="secondary" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/demo-kontak">Hubungi Kami Sekarang</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HargaPage;