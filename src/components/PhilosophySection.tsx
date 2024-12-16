import React from 'react';
import { Target } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

export default function PhilosophySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon={Target} title="活動理念と歴史" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">活動理念</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                私たちは、地域社会の持続可能な発展と、すべての人々が活き活きと暮らせる社会の実現を目指しています。
                コミュニティの力を活かし、世代を超えた交流と相互理解を促進することで、
                より豊かで活力ある地域づくりに貢献していきます。
              </p>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2070"
                alt="活動理念"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">歴史</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">2015年</h4>
                  <p className="text-gray-600">未来創造支援機構設立</p>
                </div>
                <div>
                  <h4 className="font-semibold">2017年</h4>
                  <p className="text-gray-600">地域活性化支援事業開始</p>
                </div>
                <div>
                  <h4 className="font-semibold">2019年</h4>
                  <p className="text-gray-600">若者支援プログラム開始</p>
                </div>
                <div>
                  <h4 className="font-semibold">2021年</h4>
                  <p className="text-gray-600">コミュニティ開発部門設立</p>
                </div>
                <div>
                  <h4 className="font-semibold">2023年</h4>
                  <p className="text-gray-600">地域連携ネットワーク確立</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}