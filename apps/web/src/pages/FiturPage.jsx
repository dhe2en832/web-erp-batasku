import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, TrendingUp, Package } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureList from '@/components/FeatureList.jsx';

function FiturPage() {
  const modules = [
    {
      id: 'keuangan',
      icon: DollarSign,
      title: 'Manajemen Keuangan',
      description: 'Kelola seluruh aspek keuangan perusahaan dengan sistem akuntansi yang komprehensif dan terintegrasi.',
      features: [
        'Chart of Accounts - Struktur akun keuangan yang fleksibel',
        'Balance Sheet - Laporan posisi keuangan perusahaan',
        'Journal Entry - Pencatatan transaksi keuangan',
        'Profit & Loss - Laporan laba rugi periode berjalan',
        'General Ledger - Buku besar untuk semua transaksi',
        'Cash Flow - Laporan arus kas masuk dan keluar',
        'Trial Balance - Neraca saldo untuk verifikasi akuntansi'
      ]
    },
    {
      id: 'pembelian',
      icon: ShoppingCart,
      title: 'Manajemen Pembelian',
      description: 'Otomatisasi proses pembelian dari permintaan hingga pembayaran dengan kontrol yang ketat.',
      features: [
        'Purchase Order - Pembuatan dan tracking pesanan pembelian',
        'Purchase Return - Pengelolaan retur barang ke supplier',
        'Purchase Receipt - Penerimaan barang dari supplier',
        'Supplier Management - Database dan evaluasi supplier',
        'Purchase Invoice - Pencatatan tagihan dari supplier'
      ]
    },
    {
      id: 'penjualan',
      icon: TrendingUp,
      title: 'Manajemen Penjualan',
      description: 'Tingkatkan penjualan dengan sistem yang efisien dari penawaran hingga pembayaran pelanggan.',
      features: [
        'Sales Order - Pembuatan dan tracking pesanan penjualan',
        'Credit Note - Pengelolaan retur dan kredit pelanggan',
        'Delivery Note - Surat jalan pengiriman barang',
        'Customer Management - Database dan analisis pelanggan',
        'Sales Invoice - Pembuatan faktur penjualan otomatis',
        'Commission Tracking - Perhitungan komisi sales otomatis'
      ]
    },
    {
      id: 'inventori',
      icon: Package,
      title: 'Manajemen Inventori',
      description: 'Kontrol stok barang dengan sistem multi-warehouse dan laporan inventori real-time.',
      features: [
        'Stock Entry - Pencatatan masuk dan keluar barang',
        'Item Master - Database lengkap produk dan SKU',
        'Multi Warehouse - Pengelolaan stok di berbagai lokasi',
        'Stock Reports - Laporan stok, aging, dan pergerakan barang'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fitur Lengkap - Sistem ERP Terintegrasi</title>
        <meta name="description" content="Jelajahi fitur lengkap sistem ERP kami: Manajemen Keuangan, Pembelian, Penjualan, dan Inventori. Semua terintegrasi dalam satu platform." />
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
                <h1 className="mb-6">Fitur Lengkap Sistem ERP</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Empat modul utama yang saling terintegrasi untuk mengelola seluruh aspek bisnis Anda dengan efisien dan akurat.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Tabs Section */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Tabs defaultValue="keuangan" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
                  {modules.map((module) => {
                    const Icon = module.icon;
                    return (
                      <TabsTrigger 
                        key={module.id} 
                        value={module.id}
                        className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{module.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <TabsContent key={module.id} value={module.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="border-2">
                          <CardHeader className="pb-8">
                            <div className="flex items-start space-x-4">
                              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                                <Icon className="h-8 w-8 text-primary" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-3xl mb-3">{module.title}</CardTitle>
                                <CardDescription className="text-base leading-relaxed">
                                  {module.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-semibold mb-4">Fitur Utama:</h4>
                                <FeatureList features={module.features} columns={2} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </section>

          {/* Integration Section */}
          <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="mb-6">Semua Modul Terintegrasi</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                  Keempat modul ini bekerja secara harmonis dalam satu sistem. Data mengalir otomatis antar modul, menghilangkan duplikasi entry dan memastikan konsistensi data di seluruh perusahaan.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                  <Card className="bg-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Real-time Data</h4>
                      <p className="text-sm text-muted-foreground">
                        Semua transaksi langsung tercatat dan tersinkronisasi di seluruh modul
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Single Source of Truth</h4>
                      <p className="text-sm text-muted-foreground">
                        Satu database terpusat untuk semua informasi bisnis Anda
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Automated Workflows</h4>
                      <p className="text-sm text-muted-foreground">
                        Proses bisnis berjalan otomatis dari satu modul ke modul lainnya
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Comprehensive Reports</h4>
                      <p className="text-sm text-muted-foreground">
                        Laporan lengkap yang menggabungkan data dari semua modul
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default FiturPage;