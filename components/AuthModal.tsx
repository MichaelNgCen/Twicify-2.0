"use client";

import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/app/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChanges = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <div>
      <Modal
        title="Welcome Back"
        description="Login to your account"
        isOpen={isOpen}
        onChange={onChanges}
      >
        <Auth
          theme="dark"
          supabaseClient={supabaseClient}
          providers={[]}
          magicLink={true}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
        />
        <div>
          Demo Email: KangHaerin@New.Jeans
          <br />
          Demo Password: NewJeans
        </div>
      </Modal>
    </div>
  );
};

export default AuthModal;
