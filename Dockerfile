FROM registry.apps.xplat.fis.com.vn/bitnami/apisix:3.8.0-debian-12-r7

COPY output/html /opt/bitnami/apisix-dashboard/html
