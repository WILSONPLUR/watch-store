"use client";

import React from "react";
import { AdminLayout } from "../layout/AdminLayout/AdminLayout";
import styles from "./admin.module.css";
import { ProductsTable } from "@/app/components/ProductsTable/ProductsTable";

export default function AdminProducts() {
  return (
    <AdminLayout>
      <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
          <ProductsTable
            type="products"
            products={[
              {
                id: "235",
                name: "Найменування",
                category: "Категорія",
                price: "1 204 грн",
                quantity: 30,
              },
              {
                id: "2354",
                name: "Найменування",
                category: "Категорія",
                price: "1 204 грн",
                quantity: 30,
              },
              {
                id: "2356",
                name: "Найменування",
                category: "Категорія",
                price: "1 204 грн",
                quantity: 30,
              },
              {
                id: "2357",
                name: "Найменування",
                category: "Категорія",
                price: "1 204 грн",
                quantity: 30,
              },
            ]}
            onEdit={() => {}}
          />
        </div>
      </div>
    </AdminLayout>
  );
}
