import { NextResponse } from "next/server";

/**
 * Response envelope shapes follow `prd_2.txt §9.2` exactly (success/error
 * format). NOTE: the PRD's endpoint matrix (§9.1) prefixes paths with
 * `/api/v1/` and uses English resource names (`/api/v1/news`); this project
 * instead uses the route tree already scaffolded from
 * `01-architecture-plan.md`'s sitemap (`/api/berita`, no version prefix) —
 * that document was marked final for folder/route structure. Only the
 * *envelope format* below is taken from the PRD.
 */

export interface ApiSuccessBody<T> {
  success: true;
  statusCode: number;
  message: string;
  data: T;
}

export interface ApiErrorBody {
  success: false;
  statusCode: number;
  error: string;
  message: string;
  validationErrors?: { field: string; message: string }[];
}

export function apiSuccess<T>(
  data: T,
  message = "OK",
  statusCode = 200,
): NextResponse<ApiSuccessBody<T>> {
  return NextResponse.json(
    { success: true, statusCode, message, data },
    { status: statusCode },
  );
}

export function apiError(
  error: string,
  message: string,
  statusCode = 400,
  validationErrors?: { field: string; message: string }[],
): NextResponse<ApiErrorBody> {
  return NextResponse.json(
    { success: false, statusCode, error, message, validationErrors },
    { status: statusCode },
  );
}
