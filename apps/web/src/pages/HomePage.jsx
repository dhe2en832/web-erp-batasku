import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud, Zap, Users, DollarSign, ShoppingCart, TrendingUp, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import ModuleCard from '@/components/ModuleCard.jsx';

function HomePage() {
  const benefits = [
    {
      icon: Cloud,
      title: 'Akses Berbasis Cloud',
      description: 'Akses sistem dari mana saja, kapan saja dengan koneksi internet. Data tersimpan aman di cloud.'
    },
    {
      icon: Zap,
      title: 'Proses Bisnis Terintegrasi',
      description: 'Semua modul terhubung dalam satu sistem untuk efisiensi maksimal dan data real-time.'
    },
    {
      icon: Users,
      title: 'Dipercaya Ribuan Perusahaan',
      description: 'Telah digunakan oleh berbagai industri di seluruh Indonesia dengan tingkat kepuasan tinggi.'
    }
  ];

  const modules = [
    {
      icon: DollarSign,
      title: 'Manajemen Keuangan',
      description: 'Kelola seluruh aspek keuangan perusahaan dengan laporan lengkap dan akurat.',
      features: ['Chart of Accounts', 'Balance Sheet', 'Profit & Loss', 'Cash Flow']
    },
    {
      icon: ShoppingCart,
      title: 'Manajemen Pembelian',
      description: 'Otomatisasi proses pembelian dari purchase order hingga pembayaran supplier.',
      features: ['Purchase Order', 'Purchase Receipt', 'Supplier Management', 'Purchase Invoice']
    },
    {
      icon: TrendingUp,
      title: 'Manajemen Penjualan',
      description: 'Tingkatkan penjualan dengan sistem yang efisien dari order hingga invoice.',
      features: ['Sales Order', 'Delivery Note', 'Customer Management', 'Sales Invoice']
    },
    {
      icon: Package,
      title: 'Manajemen Inventori',
      description: 'Kontrol stok barang dengan sistem multi-warehouse dan laporan real-time.',
      features: ['Stock Entry', 'Item Master', 'Multi Warehouse', 'Stock Reports']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sistem ERP Terintegrasi - Solusi Manajemen Bisnis Modern</title>
        <meta name="description" content="Sistem ERP berbasis cloud untuk manajemen keuangan, pembelian, penjualan, dan inventori. Tingkatkan efisiensi bisnis Anda dengan solusi terintegrasi." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" 
                alt="Modern business office with technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="mb-6">Sistem ERP Terintegrasi</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                    Solusi Manajemen Bisnis Modern Berbasis Cloud
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-prose">
                    Tingkatkan efisiensi operasional perusahaan Anda dengan sistem ERP yang mengintegrasikan seluruh proses bisnis dalam satu platform. Dari keuangan, pembelian, penjualan, hingga inventori - semua terhubung secara real-time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                      <Link to="/fitur">Lihat Fitur</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                      <Link to="/harga">Cek Paket Harga</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="mb-4">Mengapa Memilih Sistem Kami?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Solusi ERP yang dirancang untuk memenuhi kebutuhan bisnis modern dengan teknologi terkini.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BenefitCard {...benefit} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Modules Section */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="mb-4">Modul Utama</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Empat pilar utama yang mengintegrasikan seluruh operasional bisnis Anda.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {modules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ModuleCard {...module} />
                  </motion.div>
                ))}
              </div>
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
                <h2 className="mb-6 text-primary-foreground">Siap Meningkatkan Efisiensi Bisnis Anda?</h2>
                <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                  Jadwalkan demo gratis dan lihat bagaimana sistem kami dapat membantu bisnis Anda berkembang.
                </p>
                <Button asChild size="lg" variant="secondary" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/demo-kontak">Request Demo Sekarang</Link>
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

export default HomePage;